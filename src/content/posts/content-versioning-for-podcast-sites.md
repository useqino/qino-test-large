---
title: "Content Versioning for Podcast Sites"
created-on: "2023-01-06T20:45:00Z"
updated-on: "2023-01-21T20:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

If you work with podcast sites, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
