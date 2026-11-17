---
title: "Content Versioning and the Long Tail of Small Teams"
created-on: "2023-11-17T12:00:00Z"
updated-on: "2023-11-25T12:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

If you work with small teams, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
