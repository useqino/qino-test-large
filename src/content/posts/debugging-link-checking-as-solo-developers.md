---
title: "Debugging Link Checking as Solo Developers"
created-on: "2022-10-29T23:45:00Z"
updated-on: "2022-11-08T23:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
