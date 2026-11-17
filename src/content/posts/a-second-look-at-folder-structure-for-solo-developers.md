---
title: "A Second Look at Folder Structure for Solo Developers"
created-on: "2023-12-09T13:00:00Z"
updated-on: "2024-01-10T13:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
