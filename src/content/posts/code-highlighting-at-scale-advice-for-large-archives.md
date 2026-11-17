---
title: "Code Highlighting at Scale: Advice for Large Archives"
created-on: "2021-10-13T20:30:00Z"
updated-on: "2021-11-23T20:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

If you work with large archives, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
