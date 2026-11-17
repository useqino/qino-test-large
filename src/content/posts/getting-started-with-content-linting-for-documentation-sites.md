---
title: "Getting Started with Content Linting for Documentation Sites"
created-on: "2024-07-26T09:15:00Z"
updated-on: "2024-07-26T09:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
