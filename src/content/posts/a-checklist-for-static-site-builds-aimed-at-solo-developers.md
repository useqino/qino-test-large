---
title: "A Checklist for Static Site Builds Aimed at Solo Developers"
created-on: "2024-11-23T16:30:00Z"
updated-on: "2024-12-26T16:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with solo developers, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
