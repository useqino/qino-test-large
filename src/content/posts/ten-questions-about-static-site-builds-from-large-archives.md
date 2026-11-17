---
title: "Ten Questions About Static Site Builds from Large Archives"
created-on: "2024-05-09T09:00:00Z"
updated-on: "2024-06-16T09:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

If you work with large archives, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
