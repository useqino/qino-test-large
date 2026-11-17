---
title: "Content Versioning in Practice: A Field Report from Documentation Sites"
created-on: "2023-01-05T16:30:00Z"
updated-on: "2023-01-06T16:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
