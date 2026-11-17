---
title: "Git-Based Publishing in Practice: A Field Report from Large Archives"
created-on: "2022-03-31T06:45:00Z"
updated-on: "2022-05-17T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

If you work with large archives, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
