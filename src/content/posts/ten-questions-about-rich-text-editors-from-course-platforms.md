---
title: "Ten Questions About Rich Text Editors from Course Platforms"
created-on: "2022-10-27T04:00:00Z"
updated-on: "2022-11-17T04:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

There is a quiet consensus that rich text editors is solved. Spend a week with course platforms and that consensus falls apart quickly.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
