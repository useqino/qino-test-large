---
title: "Notes on Slug Design for Open Source Projects"
created-on: "2021-10-20T09:30:00Z"
updated-on: "2021-12-14T09:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
