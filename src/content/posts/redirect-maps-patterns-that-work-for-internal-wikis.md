---
title: "Redirect Maps Patterns That Work for Internal Wikis"
created-on: "2026-01-07T18:15:00Z"
updated-on: "2026-01-19T18:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
