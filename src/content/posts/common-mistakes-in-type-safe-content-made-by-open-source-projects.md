---
title: "Common Mistakes in Type-Safe Content Made by Open Source Projects"
created-on: "2026-09-12T17:15:00Z"
updated-on: "2026-09-29T17:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

type-safe content sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
