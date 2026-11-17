---
title: "Debugging Draft Handling as Open Source Projects"
created-on: "2024-03-26T06:45:00Z"
updated-on: "2024-05-18T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
