---
title: "How Content Editors Approach Content Audits"
created-on: "2025-10-29T15:15:00Z"
updated-on: "2025-12-16T15:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content audits is solved. Spend a week with content editors and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
