---
title: "Content Modeling, Revisited by Design Systems"
created-on: "2024-03-01T11:30:00Z"
updated-on: "2024-03-18T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
