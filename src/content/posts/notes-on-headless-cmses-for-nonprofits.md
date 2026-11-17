---
title: "Notes on Headless CMSes for Nonprofits"
created-on: "2021-08-20T15:15:00Z"
updated-on: "2021-10-14T15:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
