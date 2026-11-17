---
title: "Rethinking Content Relations for Open Source Projects"
created-on: "2024-05-23T10:45:00Z"
updated-on: "2024-05-26T10:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
