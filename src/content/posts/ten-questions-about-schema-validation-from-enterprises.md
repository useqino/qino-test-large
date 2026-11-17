---
title: "Ten Questions About Schema Validation from Enterprises"
created-on: "2022-06-19T23:45:00Z"
updated-on: "2022-07-31T23:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
