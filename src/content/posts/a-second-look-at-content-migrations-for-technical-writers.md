---
title: "A Second Look at Content Migrations for Technical Writers"
created-on: "2023-01-02T04:15:00Z"
updated-on: "2023-02-27T04:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
