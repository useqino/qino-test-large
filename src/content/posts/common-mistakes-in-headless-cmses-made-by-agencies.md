---
title: "Common Mistakes in Headless CMSes Made by Agencies"
created-on: "2023-09-20T21:15:00Z"
updated-on: "2023-10-19T21:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
