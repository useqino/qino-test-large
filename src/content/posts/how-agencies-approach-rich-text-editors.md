---
title: "How Agencies Approach Rich Text Editors"
created-on: "2023-05-29T07:45:00Z"
updated-on: "2023-07-04T07:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
