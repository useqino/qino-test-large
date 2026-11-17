---
title: "MDX Components at Scale: Advice for Podcast Sites"
created-on: "2022-07-13T04:00:00Z"
updated-on: "2022-07-24T04:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
