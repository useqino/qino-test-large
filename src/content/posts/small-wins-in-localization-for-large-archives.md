---
title: "Small Wins in Localization for Large Archives"
created-on: "2022-01-05T18:15:00Z"
updated-on: "2022-02-01T18:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that localization is solved. Spend a week with large archives and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

If you take one thing away, make it this: decide on purpose, and write the decision down.
