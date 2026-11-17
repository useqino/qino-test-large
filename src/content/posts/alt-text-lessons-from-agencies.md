---
title: "Alt Text: Lessons from Agencies"
created-on: "2026-01-06T16:45:00Z"
updated-on: "2026-03-06T16:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

We rebuilt our approach to alt text three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
