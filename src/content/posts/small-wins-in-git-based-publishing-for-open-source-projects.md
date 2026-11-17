---
title: "Small Wins in Git-Based Publishing for Open Source Projects"
created-on: "2026-05-06T07:30:00Z"
updated-on: "2026-05-08T07:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
