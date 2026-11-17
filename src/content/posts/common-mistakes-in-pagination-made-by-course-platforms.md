---
title: "Common Mistakes in Pagination Made by Course Platforms"
created-on: "2022-04-26T15:30:00Z"
updated-on: "2022-05-11T15:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
