---
title: "Content Relations for Small Teams"
created-on: "2024-12-02T07:45:00Z"
updated-on: "2024-12-11T07:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

If you work with small teams, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
