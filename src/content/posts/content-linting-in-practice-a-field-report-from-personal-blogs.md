---
title: "Content Linting in Practice: A Field Report from Personal Blogs"
created-on: "2026-03-22T22:15:00Z"
updated-on: "2026-04-25T22:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content linting. It grew, because every answer raised two more questions.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
