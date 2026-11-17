---
title: "Small Wins in Content Linting for Course Platforms"
created-on: "2022-09-01T23:15:00Z"
updated-on: "2022-09-06T23:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
