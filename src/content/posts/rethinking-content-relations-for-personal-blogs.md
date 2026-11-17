---
title: "Rethinking Content Relations for Personal Blogs"
created-on: "2026-06-30T09:00:00Z"
updated-on: "2026-07-28T09:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
