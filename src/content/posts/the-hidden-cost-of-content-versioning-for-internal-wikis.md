---
title: "The Hidden Cost of Content Versioning for Internal Wikis"
created-on: "2021-09-05T14:00:00Z"
updated-on: "2021-09-09T14:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

Most teams only notice content versioning once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
