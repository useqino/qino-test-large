---
title: "What Startups Get Wrong About Preview Modes"
created-on: "2025-10-26T17:45:00Z"
updated-on: "2025-12-14T17:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
