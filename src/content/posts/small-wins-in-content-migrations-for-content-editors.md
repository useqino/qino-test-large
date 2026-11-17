---
title: "Small Wins in Content Migrations for Content Editors"
created-on: "2022-05-27T03:30:00Z"
updated-on: "2022-05-30T03:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
