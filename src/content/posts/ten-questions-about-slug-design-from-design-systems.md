---
title: "Ten Questions About Slug Design from Design Systems"
created-on: "2025-02-09T11:30:00Z"
updated-on: "2025-02-17T11:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
