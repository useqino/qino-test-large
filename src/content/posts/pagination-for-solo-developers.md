---
title: "Pagination for Solo Developers"
created-on: "2025-09-28T13:30:00Z"
updated-on: "2025-11-08T13:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

There is a quiet consensus that pagination is solved. Spend a week with solo developers and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
