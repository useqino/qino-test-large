---
title: "A Checklist for Search Indexing Aimed at Course Platforms"
created-on: "2022-07-03T14:15:00Z"
updated-on: "2022-07-15T14:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
