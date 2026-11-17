---
title: "What Documentation Sites Get Wrong About Slug Design"
created-on: "2021-08-16T19:45:00Z"
updated-on: "2021-10-08T19:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
