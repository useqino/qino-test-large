---
title: "Common Mistakes in Rich Text Editors Made by Product Teams"
created-on: "2026-02-17T13:30:00Z"
updated-on: "2026-03-21T13:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

If you work with product teams, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
