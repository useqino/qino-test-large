---
title: "Open Graph Tags Patterns That Work for Open Source Projects"
created-on: "2022-12-31T15:30:00Z"
updated-on: "2022-12-31T15:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

We rebuilt our approach to open graph tags three times last year. Here is what survived.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
