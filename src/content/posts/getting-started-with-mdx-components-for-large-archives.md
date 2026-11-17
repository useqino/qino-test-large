---
title: "Getting Started with MDX Components for Large Archives"
created-on: "2021-08-05T03:15:00Z"
updated-on: "2021-08-23T03:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
