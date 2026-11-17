---
title: "The Hidden Cost of Author Profiles for Documentation Sites"
created-on: "2021-09-15T22:00:00Z"
updated-on: "2021-09-23T22:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
