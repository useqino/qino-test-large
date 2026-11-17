---
title: "Teaching Folder Structure to Product Teams"
created-on: "2026-06-30T00:30:00Z"
updated-on: "2026-08-04T00:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

If you work with product teams, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
