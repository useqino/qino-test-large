---
title: "Sitemaps: Lessons from Enterprises"
created-on: "2024-06-06T20:45:00Z"
updated-on: "2024-07-31T20:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

Most teams only notice sitemaps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
