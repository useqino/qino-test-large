---
title: "A Checklist for Localization Aimed at Documentation Sites"
created-on: "2024-09-18T05:00:00Z"
updated-on: "2024-10-01T05:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

There is a quiet consensus that localization is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
