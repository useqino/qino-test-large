---
title: "Rethinking Author Profiles for Design Systems"
created-on: "2026-01-07T21:00:00Z"
updated-on: "2026-01-12T21:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
