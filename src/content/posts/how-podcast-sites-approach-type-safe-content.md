---
title: "How Podcast Sites Approach Type-Safe Content"
created-on: "2026-04-14T12:30:00Z"
updated-on: "2026-05-15T12:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
