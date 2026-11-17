---
title: "Ten Questions About Pull Request Reviews from Course Platforms"
created-on: "2021-12-16T01:30:00Z"
updated-on: "2022-02-12T01:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

Most teams only notice pull request reviews once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
