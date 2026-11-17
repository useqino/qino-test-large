---
title: "A Practical Guide to Static Site Builds for Marketing Sites"
created-on: "2024-06-13T03:15:00Z"
updated-on: "2024-08-01T03:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
