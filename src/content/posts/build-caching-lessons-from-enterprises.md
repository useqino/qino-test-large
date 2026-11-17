---
title: "Build Caching: Lessons from Enterprises"
created-on: "2025-05-18T01:45:00Z"
updated-on: "2025-06-18T01:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

build caching sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
