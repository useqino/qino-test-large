---
title: "Rethinking Slug Design for News Publishers"
created-on: "2025-07-21T14:45:00Z"
updated-on: "2025-08-16T14:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

If you work with news publishers, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
