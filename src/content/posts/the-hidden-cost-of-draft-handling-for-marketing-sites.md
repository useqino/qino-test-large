---
title: "The Hidden Cost of Draft Handling for Marketing Sites"
created-on: "2023-02-01T16:30:00Z"
updated-on: "2023-02-01T16:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with marketing sites, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
