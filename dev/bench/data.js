window.BENCHMARK_DATA = {
  "lastUpdate": 1789213151284,
  "repoUrl": "https://github.com/ucan-wg/go-did-it",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "batolettre@gmail.com",
            "name": "Michael Muré",
            "username": "MichaelMure"
          },
          "committer": {
            "email": "batolettre@gmail.com",
            "name": "Michael Muré",
            "username": "MichaelMure"
          },
          "distinct": true,
          "id": "2d8205f527e19d04c0ab8b05d1b18a08cdfcab1e",
          "message": "fix readme and bench workflow",
          "timestamp": "2026-09-12T13:34:28+02:00",
          "tree_id": "a9c78f68e5d4915454aa00bebdfc4d21535fc910",
          "url": "https://github.com/ucan-wg/go-did-it/commit/2d8205f527e19d04c0ab8b05d1b18a08cdfcab1e"
        },
        "date": 1789213150782,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHasValidDIDSyntax (github.com/ucan-wg/go-did-it)",
            "value": 134.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8967019 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDIDSyntax (github.com/ucan-wg/go-did-it) - ns/op",
            "value": 134.6,
            "unit": "ns/op",
            "extra": "8967019 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDIDSyntax (github.com/ucan-wg/go-did-it) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8967019 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDIDSyntax (github.com/ucan-wg/go-did-it) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8967019 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDidUrlSyntax (github.com/ucan-wg/go-did-it)",
            "value": 388.6,
            "unit": "ns/op\t     208 B/op\t       3 allocs/op",
            "extra": "3127148 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDidUrlSyntax (github.com/ucan-wg/go-did-it) - ns/op",
            "value": 388.6,
            "unit": "ns/op",
            "extra": "3127148 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDidUrlSyntax (github.com/ucan-wg/go-did-it) - B/op",
            "value": 208,
            "unit": "B/op",
            "extra": "3127148 times\n4 procs"
          },
          {
            "name": "BenchmarkHasValidDidUrlSyntax (github.com/ucan-wg/go-did-it) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3127148 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 20841,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "57530 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 20841,
            "unit": "ns/op",
            "extra": "57530 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "57530 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "57530 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 19.68,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "54782805 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 19.68,
            "unit": "ns/op",
            "extra": "54782805 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "54782805 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "54782805 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 26.33,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "44564527 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 26.33,
            "unit": "ns/op",
            "extra": "44564527 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "44564527 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44564527 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 24.54,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "49285586 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 24.54,
            "unit": "ns/op",
            "extra": "49285586 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "49285586 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "49285586 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 32.12,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "38720942 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 32.12,
            "unit": "ns/op",
            "extra": "38720942 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "38720942 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38720942 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 1296,
            "unit": "ns/op\t     656 B/op\t      17 allocs/op",
            "extra": "917842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 1296,
            "unit": "ns/op",
            "extra": "917842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 656,
            "unit": "B/op",
            "extra": "917842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "917842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 795.9,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "1503163 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 795.9,
            "unit": "ns/op",
            "extra": "1503163 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "1503163 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1503163 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 1707,
            "unit": "ns/op\t     936 B/op\t      25 allocs/op",
            "extra": "646089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 1707,
            "unit": "ns/op",
            "extra": "646089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 936,
            "unit": "B/op",
            "extra": "646089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "646089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 22091,
            "unit": "ns/op\t     400 B/op\t       9 allocs/op",
            "extra": "53941 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 22091,
            "unit": "ns/op",
            "extra": "53941 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "53941 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "53941 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 2161,
            "unit": "ns/op\t    2304 B/op\t      25 allocs/op",
            "extra": "504379 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 2161,
            "unit": "ns/op",
            "extra": "504379 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "504379 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "504379 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 1504,
            "unit": "ns/op\t     528 B/op\t       9 allocs/op",
            "extra": "748111 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 1504,
            "unit": "ns/op",
            "extra": "748111 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 528,
            "unit": "B/op",
            "extra": "748111 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "748111 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 2658,
            "unit": "ns/op\t    2600 B/op\t      33 allocs/op",
            "extra": "426385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 2658,
            "unit": "ns/op",
            "extra": "426385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 2600,
            "unit": "B/op",
            "extra": "426385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "426385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 22829,
            "unit": "ns/op\t     688 B/op\t      14 allocs/op",
            "extra": "52014 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 22829,
            "unit": "ns/op",
            "extra": "52014 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 688,
            "unit": "B/op",
            "extra": "52014 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "52014 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 25195,
            "unit": "ns/op\t     120 B/op\t       3 allocs/op",
            "extra": "47557 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 25195,
            "unit": "ns/op",
            "extra": "47557 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "47557 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "47557 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 60007,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "19988 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 60007,
            "unit": "ns/op",
            "extra": "19988 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "19988 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19988 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 59801,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "20265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 59801,
            "unit": "ns/op",
            "extra": "20265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "20265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 25478,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "46828 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 25478,
            "unit": "ns/op",
            "extra": "46828 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "46828 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "46828 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519)",
            "value": 60048,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "20143 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - ns/op",
            "value": 60048,
            "unit": "ns/op",
            "extra": "20143 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "20143 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/ed25519) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20143 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 15525,
            "unit": "ns/op\t    1000 B/op\t      18 allocs/op",
            "extra": "77284 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 15525,
            "unit": "ns/op",
            "extra": "77284 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1000,
            "unit": "B/op",
            "extra": "77284 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "77284 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 358.5,
            "unit": "ns/op\t     224 B/op\t       3 allocs/op",
            "extra": "3358705 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 358.5,
            "unit": "ns/op",
            "extra": "3358705 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 224,
            "unit": "B/op",
            "extra": "3358705 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3358705 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 8207,
            "unit": "ns/op\t     408 B/op\t       8 allocs/op",
            "extra": "143962 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 8207,
            "unit": "ns/op",
            "extra": "143962 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 408,
            "unit": "B/op",
            "extra": "143962 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "143962 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 37.73,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "30808834 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 37.73,
            "unit": "ns/op",
            "extra": "30808834 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "30808834 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "30808834 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 14737,
            "unit": "ns/op\t     520 B/op\t      10 allocs/op",
            "extra": "80215 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 14737,
            "unit": "ns/op",
            "extra": "80215 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 520,
            "unit": "B/op",
            "extra": "80215 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "80215 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 2072,
            "unit": "ns/op\t    1064 B/op\t      25 allocs/op",
            "extra": "547873 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 2072,
            "unit": "ns/op",
            "extra": "547873 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1064,
            "unit": "B/op",
            "extra": "547873 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "547873 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 1362,
            "unit": "ns/op\t     704 B/op\t      12 allocs/op",
            "extra": "790564 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 1362,
            "unit": "ns/op",
            "extra": "790564 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 704,
            "unit": "B/op",
            "extra": "790564 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "790564 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 4341,
            "unit": "ns/op\t    2016 B/op\t      48 allocs/op",
            "extra": "272268 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 4341,
            "unit": "ns/op",
            "extra": "272268 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 2016,
            "unit": "B/op",
            "extra": "272268 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "272268 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 17773,
            "unit": "ns/op\t    1440 B/op\t      29 allocs/op",
            "extra": "67164 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 17773,
            "unit": "ns/op",
            "extra": "67164 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1440,
            "unit": "B/op",
            "extra": "67164 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "67164 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 3131,
            "unit": "ns/op\t    3032 B/op\t      34 allocs/op",
            "extra": "353478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 3131,
            "unit": "ns/op",
            "extra": "353478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 3032,
            "unit": "B/op",
            "extra": "353478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 34,
            "unit": "allocs/op",
            "extra": "353478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 2323,
            "unit": "ns/op\t    1104 B/op\t      17 allocs/op",
            "extra": "487339 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 2323,
            "unit": "ns/op",
            "extra": "487339 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1104,
            "unit": "B/op",
            "extra": "487339 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "487339 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 5488,
            "unit": "ns/op\t    4064 B/op\t      57 allocs/op",
            "extra": "209298 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 5488,
            "unit": "ns/op",
            "extra": "209298 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 4064,
            "unit": "B/op",
            "extra": "209298 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "209298 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 18929,
            "unit": "ns/op\t    1952 B/op\t      34 allocs/op",
            "extra": "62427 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 18929,
            "unit": "ns/op",
            "extra": "62427 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1952,
            "unit": "B/op",
            "extra": "62427 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 34,
            "unit": "allocs/op",
            "extra": "62427 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 35953,
            "unit": "ns/op\t    6519 B/op\t      67 allocs/op",
            "extra": "33279 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 35953,
            "unit": "ns/op",
            "extra": "33279 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 6519,
            "unit": "B/op",
            "extra": "33279 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 67,
            "unit": "allocs/op",
            "extra": "33279 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 81633,
            "unit": "ns/op\t    1200 B/op\t      20 allocs/op",
            "extra": "14652 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 81633,
            "unit": "ns/op",
            "extra": "14652 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1200,
            "unit": "B/op",
            "extra": "14652 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "14652 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 81969,
            "unit": "ns/op\t    1232 B/op\t      22 allocs/op",
            "extra": "14623 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 81969,
            "unit": "ns/op",
            "extra": "14623 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1232,
            "unit": "B/op",
            "extra": "14623 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "14623 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 36511,
            "unit": "ns/op\t    6968 B/op\t      75 allocs/op",
            "extra": "33112 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 36511,
            "unit": "ns/op",
            "extra": "33112 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 6968,
            "unit": "B/op",
            "extra": "33112 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 75,
            "unit": "allocs/op",
            "extra": "33112 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 81426,
            "unit": "ns/op\t     760 B/op\t      13 allocs/op",
            "extra": "14733 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 81426,
            "unit": "ns/op",
            "extra": "14733 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 760,
            "unit": "B/op",
            "extra": "14733 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "14733 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p256)",
            "value": 76397,
            "unit": "ns/op\t    1232 B/op\t      18 allocs/op",
            "extra": "15669 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p256) - ns/op",
            "value": 76397,
            "unit": "ns/op",
            "extra": "15669 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p256) - B/op",
            "value": 1232,
            "unit": "B/op",
            "extra": "15669 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p256) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "15669 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 145575,
            "unit": "ns/op\t    1200 B/op\t      21 allocs/op",
            "extra": "7965 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 145575,
            "unit": "ns/op",
            "extra": "7965 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1200,
            "unit": "B/op",
            "extra": "7965 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "7965 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 1106,
            "unit": "ns/op\t     344 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 1106,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 40762,
            "unit": "ns/op\t     544 B/op\t      11 allocs/op",
            "extra": "29400 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 40762,
            "unit": "ns/op",
            "extra": "29400 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 544,
            "unit": "B/op",
            "extra": "29400 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "29400 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 52.44,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "22724552 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 52.44,
            "unit": "ns/op",
            "extra": "22724552 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "22724552 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22724552 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 144512,
            "unit": "ns/op\t     672 B/op\t      13 allocs/op",
            "extra": "8282 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 144512,
            "unit": "ns/op",
            "extra": "8282 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 672,
            "unit": "B/op",
            "extra": "8282 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "8282 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 2929,
            "unit": "ns/op\t    1192 B/op\t      28 allocs/op",
            "extra": "391490 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 2929,
            "unit": "ns/op",
            "extra": "391490 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1192,
            "unit": "B/op",
            "extra": "391490 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "391490 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 2159,
            "unit": "ns/op\t     776 B/op\t      15 allocs/op",
            "extra": "519721 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 2159,
            "unit": "ns/op",
            "extra": "519721 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "519721 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "519721 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 5265,
            "unit": "ns/op\t    2240 B/op\t      51 allocs/op",
            "extra": "223233 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 5265,
            "unit": "ns/op",
            "extra": "223233 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 2240,
            "unit": "B/op",
            "extra": "223233 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "223233 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 149242,
            "unit": "ns/op\t    1728 B/op\t      35 allocs/op",
            "extra": "8102 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 149242,
            "unit": "ns/op",
            "extra": "8102 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1728,
            "unit": "B/op",
            "extra": "8102 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "8102 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 4017,
            "unit": "ns/op\t    3192 B/op\t      37 allocs/op",
            "extra": "293599 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 4017,
            "unit": "ns/op",
            "extra": "293599 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 3192,
            "unit": "B/op",
            "extra": "293599 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "293599 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 3267,
            "unit": "ns/op\t    1240 B/op\t      20 allocs/op",
            "extra": "356139 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 3267,
            "unit": "ns/op",
            "extra": "356139 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1240,
            "unit": "B/op",
            "extra": "356139 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "356139 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 6880,
            "unit": "ns/op\t    4864 B/op\t      61 allocs/op",
            "extra": "171390 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 6880,
            "unit": "ns/op",
            "extra": "171390 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "171390 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "171390 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 151536,
            "unit": "ns/op\t    2352 B/op\t      40 allocs/op",
            "extra": "7842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 151536,
            "unit": "ns/op",
            "extra": "7842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 2352,
            "unit": "B/op",
            "extra": "7842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "7842 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 232634,
            "unit": "ns/op\t    6864 B/op\t      69 allocs/op",
            "extra": "5140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 232634,
            "unit": "ns/op",
            "extra": "5140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 6864,
            "unit": "B/op",
            "extra": "5140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "5140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 694238,
            "unit": "ns/op\t    1624 B/op\t      28 allocs/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 694238,
            "unit": "ns/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1624,
            "unit": "B/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 694719,
            "unit": "ns/op\t    1656 B/op\t      30 allocs/op",
            "extra": "1723 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 694719,
            "unit": "ns/op",
            "extra": "1723 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1656,
            "unit": "B/op",
            "extra": "1723 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1723 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 233329,
            "unit": "ns/op\t    7360 B/op\t      77 allocs/op",
            "extra": "5037 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 233329,
            "unit": "ns/op",
            "extra": "5037 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 7360,
            "unit": "B/op",
            "extra": "5037 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "5037 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 692661,
            "unit": "ns/op\t    1136 B/op\t      21 allocs/op",
            "extra": "1730 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 692661,
            "unit": "ns/op",
            "extra": "1730 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1136,
            "unit": "B/op",
            "extra": "1730 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1730 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p384)",
            "value": 642163,
            "unit": "ns/op\t    1728 B/op\t      30 allocs/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p384) - ns/op",
            "value": 642163,
            "unit": "ns/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p384) - B/op",
            "value": 1728,
            "unit": "B/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p384) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 658137,
            "unit": "ns/op\t    1600 B/op\t      22 allocs/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 658137,
            "unit": "ns/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 1600,
            "unit": "B/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 2190,
            "unit": "ns/op\t     488 B/op\t       6 allocs/op",
            "extra": "528493 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 2190,
            "unit": "ns/op",
            "extra": "528493 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 488,
            "unit": "B/op",
            "extra": "528493 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "528493 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 206930,
            "unit": "ns/op\t     736 B/op\t      11 allocs/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 206930,
            "unit": "ns/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 81.47,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14696089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 81.47,
            "unit": "ns/op",
            "extra": "14696089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "14696089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14696089 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 658125,
            "unit": "ns/op\t     896 B/op\t      13 allocs/op",
            "extra": "1815 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 658125,
            "unit": "ns/op",
            "extra": "1815 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 896,
            "unit": "B/op",
            "extra": "1815 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1815 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 4034,
            "unit": "ns/op\t    1352 B/op\t      28 allocs/op",
            "extra": "291654 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 4034,
            "unit": "ns/op",
            "extra": "291654 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 1352,
            "unit": "B/op",
            "extra": "291654 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "291654 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 3265,
            "unit": "ns/op\t     936 B/op\t      15 allocs/op",
            "extra": "356071 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 3265,
            "unit": "ns/op",
            "extra": "356071 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 936,
            "unit": "B/op",
            "extra": "356071 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "356071 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 6936,
            "unit": "ns/op\t    2528 B/op\t      51 allocs/op",
            "extra": "174478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 6936,
            "unit": "ns/op",
            "extra": "174478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2528,
            "unit": "B/op",
            "extra": "174478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "174478 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 664015,
            "unit": "ns/op\t    2208 B/op\t      35 allocs/op",
            "extra": "1807 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 664015,
            "unit": "ns/op",
            "extra": "1807 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2208,
            "unit": "B/op",
            "extra": "1807 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "1807 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 5564,
            "unit": "ns/op\t    3928 B/op\t      38 allocs/op",
            "extra": "211898 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 5564,
            "unit": "ns/op",
            "extra": "211898 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 3928,
            "unit": "B/op",
            "extra": "211898 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "211898 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 4579,
            "unit": "ns/op\t    1496 B/op\t      20 allocs/op",
            "extra": "252994 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 4579,
            "unit": "ns/op",
            "extra": "252994 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 1496,
            "unit": "B/op",
            "extra": "252994 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "252994 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 8558,
            "unit": "ns/op\t    5216 B/op\t      61 allocs/op",
            "extra": "138592 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 8558,
            "unit": "ns/op",
            "extra": "138592 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 5216,
            "unit": "B/op",
            "extra": "138592 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "138592 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 667342,
            "unit": "ns/op\t    2960 B/op\t      40 allocs/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 667342,
            "unit": "ns/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2960,
            "unit": "B/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 856829,
            "unit": "ns/op\t    7648 B/op\t      70 allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 856829,
            "unit": "ns/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 7648,
            "unit": "B/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 70,
            "unit": "allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 3196783,
            "unit": "ns/op\t    2104 B/op\t      28 allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 3196783,
            "unit": "ns/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2104,
            "unit": "B/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 3200175,
            "unit": "ns/op\t    2136 B/op\t      30 allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 3200175,
            "unit": "ns/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2136,
            "unit": "B/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 858903,
            "unit": "ns/op\t    8208 B/op\t      78 allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 858903,
            "unit": "ns/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 8208,
            "unit": "B/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 78,
            "unit": "allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 3194842,
            "unit": "ns/op\t    1568 B/op\t      21 allocs/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 3194842,
            "unit": "ns/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 1568,
            "unit": "B/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p521)",
            "value": 3114816,
            "unit": "ns/op\t    2369 B/op\t      30 allocs/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p521) - ns/op",
            "value": 3114816,
            "unit": "ns/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p521) - B/op",
            "value": 2369,
            "unit": "B/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/p521) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 61186860,
            "unit": "ns/op\t  523894 B/op\t    4861 allocs/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 61186860,
            "unit": "ns/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 523894,
            "unit": "B/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 4861,
            "unit": "allocs/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 4e-7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 4e-7,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 2695,
            "unit": "ns/op\t    1896 B/op\t      33 allocs/op",
            "extra": "434778 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 2695,
            "unit": "ns/op",
            "extra": "434778 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 1896,
            "unit": "B/op",
            "extra": "434778 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "434778 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 1123,
            "unit": "ns/op\t     640 B/op\t       7 allocs/op",
            "extra": "939668 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 1123,
            "unit": "ns/op",
            "extra": "939668 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 640,
            "unit": "B/op",
            "extra": "939668 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "939668 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 17415,
            "unit": "ns/op\t   12760 B/op\t     109 allocs/op",
            "extra": "61297 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 17415,
            "unit": "ns/op",
            "extra": "61297 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 12760,
            "unit": "B/op",
            "extra": "61297 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 109,
            "unit": "allocs/op",
            "extra": "61297 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 157382,
            "unit": "ns/op\t   15472 B/op\t     105 allocs/op",
            "extra": "7414 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 157382,
            "unit": "ns/op",
            "extra": "7414 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 15472,
            "unit": "B/op",
            "extra": "7414 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 105,
            "unit": "allocs/op",
            "extra": "7414 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 4330,
            "unit": "ns/op\t    4664 B/op\t      43 allocs/op",
            "extra": "268827 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 4330,
            "unit": "ns/op",
            "extra": "268827 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 4664,
            "unit": "B/op",
            "extra": "268827 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "268827 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 3168,
            "unit": "ns/op\t    1552 B/op\t      12 allocs/op",
            "extra": "357510 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 3168,
            "unit": "ns/op",
            "extra": "357510 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 1552,
            "unit": "B/op",
            "extra": "357510 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "357510 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 21423,
            "unit": "ns/op\t   19872 B/op\t     119 allocs/op",
            "extra": "55744 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 21423,
            "unit": "ns/op",
            "extra": "55744 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 19872,
            "unit": "B/op",
            "extra": "55744 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "55744 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 164828,
            "unit": "ns/op\t   18672 B/op\t     110 allocs/op",
            "extra": "7087 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 164828,
            "unit": "ns/op",
            "extra": "7087 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 18672,
            "unit": "B/op",
            "extra": "7087 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "7087 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 1121248,
            "unit": "ns/op\t     728 B/op\t       6 allocs/op",
            "extra": "1072 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 1121248,
            "unit": "ns/op",
            "extra": "1072 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "1072 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1072 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 34092,
            "unit": "ns/op\t    1592 B/op\t      13 allocs/op",
            "extra": "35032 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 34092,
            "unit": "ns/op",
            "extra": "35032 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 1592,
            "unit": "B/op",
            "extra": "35032 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite2048/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "35032 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 323606355,
            "unit": "ns/op\t 1771832 B/op\t   11228 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 323606355,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 1771832,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 11228,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 5e-7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 5e-7,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 2876,
            "unit": "ns/op\t    2280 B/op\t      33 allocs/op",
            "extra": "389887 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 2876,
            "unit": "ns/op",
            "extra": "389887 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 2280,
            "unit": "B/op",
            "extra": "389887 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "389887 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 1167,
            "unit": "ns/op\t     768 B/op\t       7 allocs/op",
            "extra": "908241 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 1167,
            "unit": "ns/op",
            "extra": "908241 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 768,
            "unit": "B/op",
            "extra": "908241 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "908241 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 22464,
            "unit": "ns/op\t   18912 B/op\t     110 allocs/op",
            "extra": "53120 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 22464,
            "unit": "ns/op",
            "extra": "53120 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 18912,
            "unit": "B/op",
            "extra": "53120 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "53120 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 347930,
            "unit": "ns/op\t   44672 B/op\t     156 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 347930,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 44672,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 4984,
            "unit": "ns/op\t    6232 B/op\t      44 allocs/op",
            "extra": "230600 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 4984,
            "unit": "ns/op",
            "extra": "230600 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 6232,
            "unit": "B/op",
            "extra": "230600 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "230600 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 3842,
            "unit": "ns/op\t    1968 B/op\t      12 allocs/op",
            "extra": "305989 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 3842,
            "unit": "ns/op",
            "extra": "305989 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 1968,
            "unit": "B/op",
            "extra": "305989 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "305989 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 28887,
            "unit": "ns/op\t   31384 B/op\t     125 allocs/op",
            "extra": "41125 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 28887,
            "unit": "ns/op",
            "extra": "41125 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 31384,
            "unit": "B/op",
            "extra": "41125 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "41125 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 358811,
            "unit": "ns/op\t   49504 B/op\t     161 allocs/op",
            "extra": "3265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 358811,
            "unit": "ns/op",
            "extra": "3265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 49504,
            "unit": "B/op",
            "extra": "3265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 161,
            "unit": "allocs/op",
            "extra": "3265 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 3206789,
            "unit": "ns/op\t   28744 B/op\t      57 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 3206789,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 28744,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 145202,
            "unit": "ns/op\t   44328 B/op\t      97 allocs/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 145202,
            "unit": "ns/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 44328,
            "unit": "B/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite3072/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 635918787,
            "unit": "ns/op\t 2185634 B/op\t   10402 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 635918787,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 2185634,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 10402,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 5e-7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 5e-7,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Bytes (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 3030,
            "unit": "ns/op\t    2696 B/op\t      33 allocs/op",
            "extra": "382656 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 3030,
            "unit": "ns/op",
            "extra": "382656 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 2696,
            "unit": "B/op",
            "extra": "382656 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "382656 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 1203,
            "unit": "ns/op\t     896 B/op\t       7 allocs/op",
            "extra": "901930 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 1203,
            "unit": "ns/op",
            "extra": "901930 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 896,
            "unit": "B/op",
            "extra": "901930 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "901930 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 28190,
            "unit": "ns/op\t   25232 B/op\t     114 allocs/op",
            "extra": "43058 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 28190,
            "unit": "ns/op",
            "extra": "43058 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 25232,
            "unit": "B/op",
            "extra": "43058 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "43058 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 589331,
            "unit": "ns/op\t   62640 B/op\t     164 allocs/op",
            "extra": "1992 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 589331,
            "unit": "ns/op",
            "extra": "1992 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 62640,
            "unit": "B/op",
            "extra": "1992 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1992 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 5331,
            "unit": "ns/op\t    6904 B/op\t      44 allocs/op",
            "extra": "217491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 5331,
            "unit": "ns/op",
            "extra": "217491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 6904,
            "unit": "B/op",
            "extra": "217491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "217491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 4533,
            "unit": "ns/op\t    2480 B/op\t      12 allocs/op",
            "extra": "259580 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 4533,
            "unit": "ns/op",
            "extra": "259580 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 2480,
            "unit": "B/op",
            "extra": "259580 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "259580 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 35023,
            "unit": "ns/op\t   38104 B/op\t     125 allocs/op",
            "extra": "34360 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 35023,
            "unit": "ns/op",
            "extra": "34360 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 38104,
            "unit": "B/op",
            "extra": "34360 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "34360 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 604703,
            "unit": "ns/op\t   69200 B/op\t     171 allocs/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 604703,
            "unit": "ns/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 69200,
            "unit": "B/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 171,
            "unit": "allocs/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 6759520,
            "unit": "ns/op\t   38232 B/op\t      57 allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 6759520,
            "unit": "ns/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 38232,
            "unit": "B/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa)",
            "value": 247825,
            "unit": "ns/op\t   62904 B/op\t     105 allocs/op",
            "extra": "4642 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - ns/op",
            "value": 247825,
            "unit": "ns/op",
            "extra": "4642 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - B/op",
            "value": 62904,
            "unit": "B/op",
            "extra": "4642 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite4096/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/rsa) - allocs/op",
            "value": 105,
            "unit": "allocs/op",
            "extra": "4642 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 34780,
            "unit": "ns/op\t     160 B/op\t       5 allocs/op",
            "extra": "34454 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 34780,
            "unit": "ns/op",
            "extra": "34454 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "34454 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34454 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 35.05,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "34407562 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 35.05,
            "unit": "ns/op",
            "extra": "34407562 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "34407562 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "34407562 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 10525,
            "unit": "ns/op\t      88 B/op\t       2 allocs/op",
            "extra": "113739 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 10525,
            "unit": "ns/op",
            "extra": "113739 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "113739 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "113739 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 25.59,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "46059140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 25.59,
            "unit": "ns/op",
            "extra": "46059140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "46059140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46059140 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 51.34,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "23617086 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 51.34,
            "unit": "ns/op",
            "extra": "23617086 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "23617086 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "23617086 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 1734,
            "unit": "ns/op\t     912 B/op\t      23 allocs/op",
            "extra": "655083 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 1734,
            "unit": "ns/op",
            "extra": "655083 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 912,
            "unit": "B/op",
            "extra": "655083 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "655083 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 1156,
            "unit": "ns/op\t     352 B/op\t       6 allocs/op",
            "extra": "935278 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 1156,
            "unit": "ns/op",
            "extra": "935278 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 352,
            "unit": "B/op",
            "extra": "935278 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "935278 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 38386,
            "unit": "ns/op\t    1944 B/op\t      47 allocs/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 38386,
            "unit": "ns/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 1944,
            "unit": "B/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 47,
            "unit": "allocs/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 1952,
            "unit": "ns/op\t     576 B/op\t      13 allocs/op",
            "extra": "588434 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 1952,
            "unit": "ns/op",
            "extra": "588434 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "588434 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "588434 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 2833,
            "unit": "ns/op\t    2864 B/op\t      32 allocs/op",
            "extra": "384554 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 2833,
            "unit": "ns/op",
            "extra": "384554 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 2864,
            "unit": "B/op",
            "extra": "384554 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "384554 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 2064,
            "unit": "ns/op\t     736 B/op\t      11 allocs/op",
            "extra": "557046 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 2064,
            "unit": "ns/op",
            "extra": "557046 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "557046 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "557046 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 39893,
            "unit": "ns/op\t    3976 B/op\t      56 allocs/op",
            "extra": "30117 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 39893,
            "unit": "ns/op",
            "extra": "30117 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 3976,
            "unit": "B/op",
            "extra": "30117 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 56,
            "unit": "allocs/op",
            "extra": "30117 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 3184,
            "unit": "ns/op\t    1072 B/op\t      18 allocs/op",
            "extra": "354501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 3184,
            "unit": "ns/op",
            "extra": "354501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "354501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "354501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 39218,
            "unit": "ns/op\t    1792 B/op\t      33 allocs/op",
            "extra": "30333 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 39218,
            "unit": "ns/op",
            "extra": "30333 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 1792,
            "unit": "B/op",
            "extra": "30333 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "30333 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 147374,
            "unit": "ns/op\t     784 B/op\t      16 allocs/op",
            "extra": "7810 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 147374,
            "unit": "ns/op",
            "extra": "7810 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 784,
            "unit": "B/op",
            "extra": "7810 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_Bytes_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "7810 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 148406,
            "unit": "ns/op\t     816 B/op\t      18 allocs/op",
            "extra": "8107 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 148406,
            "unit": "ns/op",
            "extra": "8107 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 816,
            "unit": "B/op",
            "extra": "8107 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_varsig_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8107 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 39282,
            "unit": "ns/op\t    1808 B/op\t      33 allocs/op",
            "extra": "30416 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 39282,
            "unit": "ns/op",
            "extra": "30416 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 1808,
            "unit": "B/op",
            "extra": "30416 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Sign_to_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "30416 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 150392,
            "unit": "ns/op\t     848 B/op\t      17 allocs/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 150392,
            "unit": "ns/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 848,
            "unit": "B/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Signatures/Verify_from_ASN.1_signature (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/secp256k1)",
            "value": 133844,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "8985 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/secp256k1) - ns/op",
            "value": 133844,
            "unit": "ns/op",
            "extra": "8985 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/secp256k1) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8985 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/secp256k1) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8985 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 52060,
            "unit": "ns/op\t     240 B/op\t       7 allocs/op",
            "extra": "23077 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 52060,
            "unit": "ns/op",
            "extra": "23077 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "23077 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/GenerateKeyPair (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "23077 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 47.56,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "21499794 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 47.56,
            "unit": "ns/op",
            "extra": "21499794 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "21499794 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "21499794 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 62.55,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "18323491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 62.55,
            "unit": "ns/op",
            "extra": "18323491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "18323491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PubFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "18323491 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 27.32,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "45945501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 27.32,
            "unit": "ns/op",
            "extra": "45945501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "45945501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivToBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45945501 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 51763,
            "unit": "ns/op\t     200 B/op\t       5 allocs/op",
            "extra": "23082 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 51763,
            "unit": "ns/op",
            "extra": "23082 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "23082 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Bytes/PrivFromBytes (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "23082 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 1382,
            "unit": "ns/op\t     776 B/op\t      17 allocs/op",
            "extra": "750738 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 1382,
            "unit": "ns/op",
            "extra": "750738 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "750738 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "750738 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 882.3,
            "unit": "ns/op\t     320 B/op\t       6 allocs/op",
            "extra": "1367872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 882.3,
            "unit": "ns/op",
            "extra": "1367872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "1367872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PubFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1367872 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 1867,
            "unit": "ns/op\t     960 B/op\t      24 allocs/op",
            "extra": "621826 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 1867,
            "unit": "ns/op",
            "extra": "621826 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 960,
            "unit": "B/op",
            "extra": "621826 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivToDER (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "621826 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 53277,
            "unit": "ns/op\t     512 B/op\t      12 allocs/op",
            "extra": "22549 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 53277,
            "unit": "ns/op",
            "extra": "22549 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "22549 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/DER/PrivFromDER (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "22549 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 2182,
            "unit": "ns/op\t    2424 B/op\t      25 allocs/op",
            "extra": "526002 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 2182,
            "unit": "ns/op",
            "extra": "526002 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 2424,
            "unit": "B/op",
            "extra": "526002 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "526002 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 1604,
            "unit": "ns/op\t     608 B/op\t      11 allocs/op",
            "extra": "704232 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 1604,
            "unit": "ns/op",
            "extra": "704232 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "704232 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PubFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "704232 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 2681,
            "unit": "ns/op\t    2624 B/op\t      32 allocs/op",
            "extra": "431841 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 2681,
            "unit": "ns/op",
            "extra": "431841 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 2624,
            "unit": "B/op",
            "extra": "431841 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivToPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "431841 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 53860,
            "unit": "ns/op\t     800 B/op\t      17 allocs/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 53860,
            "unit": "ns/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 800,
            "unit": "B/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/PEM/PrivFromPEM (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/x25519)",
            "value": 51767,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "23205 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/x25519) - ns/op",
            "value": 51767,
            "unit": "ns/op",
            "extra": "23205 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/x25519) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "23205 times\n4 procs"
          },
          {
            "name": "BenchmarkSuite/Key_exchange/KeyExchange (github.com/ucan-wg/go-did-it/crypto/x25519) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23205 times\n4 procs"
          }
        ]
      }
    ]
  }
}