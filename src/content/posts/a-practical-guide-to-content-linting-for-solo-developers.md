---
title: "A Practical Guide to Content Linting for Solo Developers"
created-on: "2025-07-30T08:30:00Z"
updated-on: "2025-08-19T08:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
