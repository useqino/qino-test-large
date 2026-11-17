---
title: "Ten Questions About Incremental Builds from Large Archives"
created-on: "2022-08-31T06:30:00Z"
updated-on: "2022-10-23T06:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

If you work with large archives, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
