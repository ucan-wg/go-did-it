# did:plc controller

The controller side of did:plc: creating, updating, recovering, deactivating and auditing a
DID. Start at [`doc.go`](doc.go) — it covers the method, the layering, and what each mode
trusts. This file covers one thing that doc cannot be the right place for: **the published
specification is wrong about several limits, and this package follows the directory server,
not the spec.**

## The spec does not describe what plc.directory enforces

As of spec v0.3.0 (December 2025), the current published version:

| spec v0.3.0 says                | the server enforces                | since                                                       |
|---------------------------------|------------------------------------|-------------------------------------------------------------|
| op size ≤ 7500 bytes            | 4000 (`MAX_OP_BYTES`)              | [#47], 2023-09-20 — 7500 itself came from [#14], 2023-04-11 |
| `rotationKeys` ≤ 5              | 10 (`MAX_ROTATION_ENTRIES`)        | [#47]                                                       |
| `rotationKeys` ≥ 1              | nothing; an empty list is accepted | dropped in [#47], never replaced                            |
| `rotationKeys` "no duplication" | nothing                            | never enforced, at any point                                |

[#47]: https://github.com/did-method-plc/did-method-plc/pull/47
[#14]: https://github.com/did-method-plc/did-method-plc/pull/14

[#47] deleted `assureValidOp`, which held the ≤ 5 and ≥ 1 checks, and replaced it with
`packages/server/src/constraints.ts`. Nothing in that file replaced the minimum, and nothing
has ever rejected a duplicate. The spec text was not updated, and has not been since.

The same commit added several limits the spec never documented at all — the
`verificationMethods`, `alsoKnownAs` and `services` entry counts, the string lengths — which
is the subject of [issue #136]. `spec.go` names the server constant beside each one, so any
of them can be checked against `constraints.ts` directly.

[issue #136]: https://github.com/did-method-plc/did-method-plc/issues/136

## The rule underneath all of it

The server applies these limits **only to an operation being submitted**. It never applies
them when serving a stored log, so an operation accepted before a limit existed stays valid
forever, and a validator that enforces them while replaying will reject real DIDs.

That is the whole shape of how this package treats them: every constant in
[`spec.go`](spec.go) bounds what is *written*, and [`chain.validate`](chain.go) applies none
of them to what is *read*. Not laxity — the protocol.

## What this package does, row by row

- **4000 bytes.** `maxOperationBytes`, checked in `codec.go` when signing. A stored operation
  over 4000 bytes replays without complaint; some genuinely are, from before 2023-09-20.
- **10 rotation keys.** `maxRotationKeys`, write path only.
- **No minimum.** `minRotationKeys = 1` is *this package's own floor*, not the protocol's, and
  the one place it is deliberately stricter than the server. An operation with an empty
  rotation key list permanently freezes the DID — authority for the next operation comes only
  from that list — so writing one is refused as an unrecoverable mistake. Reading one is not:
  the interop suite carries `log_empty_rotation_keys.json`, a valid log ending in exactly
  that, and applying the floor on the read path would make a real DID unreadable.
- **Duplicates.** Accepted on both paths. Real DIDs carry them
  (`log_duplicate_rotation_keys.json`), so refusing them would leave those DIDs readable but
  impossible to update. A repeated key confers the authority of its *first* occurrence only.

`TestInteropPinsTheReadPathLenient` pins the last two, in both directions. If you tighten
something here, that test is what will tell you it was one of these.

## One more divergence, same class

The spec calls `alsoKnownAs` "a list of URIs". The server validates nothing of the sort, and
a large share of live operations carry an entry that is not a URI — a bare identifier
alongside the `at://` handle. `validateAlsoKnownAs` in [`state.go`](state.go) therefore
checks length and duplication but never requires a scheme.

## If the spec gets corrected

A correction aligning the spec with the server was drafted against v0.3.0 and adds an
"Operation Constraints" section. When a version carrying it ships, the tables above become
history rather than a warning — but the constants do not move, because they were always the
server's. Re-read `constraints.ts`, not the spec, before changing any number in `spec.go`.
