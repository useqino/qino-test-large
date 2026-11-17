---
title: "Debugging Folder Structure as Startups"
created-on: "2021-10-12T19:30:00Z"
updated-on: "2021-10-25T19:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
