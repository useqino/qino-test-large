---
title: "Common Mistakes in Build Caching Made by Internal Wikis"
created-on: "2023-02-21T05:45:00Z"
updated-on: "2023-03-06T05:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with internal wikis, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
