---
title: "A Second Look at Content Linting for Open Source Projects"
created-on: "2023-03-02T00:00:00Z"
updated-on: "2023-04-18T00:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
