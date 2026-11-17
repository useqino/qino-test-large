---
title: "Why Documentation Sites Should Care About Media Management"
created-on: "2021-12-04T20:45:00Z"
updated-on: "2022-01-17T20:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
