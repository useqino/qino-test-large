---
title: "The Hidden Cost of Flat-File Storage for Startups"
created-on: "2023-10-08T07:15:00Z"
updated-on: "2023-11-30T07:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

Most teams only notice flat-file storage once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
