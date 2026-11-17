---
title: "The Hidden Cost of Link Checking for Enterprises"
created-on: "2026-03-14T14:00:00Z"
updated-on: "2026-03-15T14:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
