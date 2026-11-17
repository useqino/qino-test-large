---
title: "Why Internal Wikis Should Care About Git-Based Publishing"
created-on: "2025-05-04T16:30:00Z"
updated-on: "2025-05-20T16:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
