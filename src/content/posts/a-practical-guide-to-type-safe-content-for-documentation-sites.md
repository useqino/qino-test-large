---
title: "A Practical Guide to Type-Safe Content for Documentation Sites"
created-on: "2022-08-20T12:00:00Z"
updated-on: "2022-09-03T12:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
