---
title: "Open Graph Tags at Scale: Advice for Startups"
created-on: "2022-01-06T12:00:00Z"
updated-on: "2022-03-04T12:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

open graph tags sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
