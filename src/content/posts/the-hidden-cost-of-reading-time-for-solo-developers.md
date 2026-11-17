---
title: "The Hidden Cost of Reading Time for Solo Developers"
created-on: "2022-08-17T21:00:00Z"
updated-on: "2022-08-25T21:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
