---
title: "Link Checking in Practice: A Field Report from Startups"
created-on: "2023-09-24T07:45:00Z"
updated-on: "2023-11-11T07:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

Most teams only notice link checking once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
