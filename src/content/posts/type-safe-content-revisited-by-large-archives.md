---
title: "Type-Safe Content, Revisited by Large Archives"
created-on: "2026-08-13T13:30:00Z"
updated-on: "2026-10-06T13:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

If you work with large archives, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
