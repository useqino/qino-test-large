---
title: "Rethinking RSS Feeds for Open Source Projects"
created-on: "2024-08-21T17:30:00Z"
updated-on: "2024-10-09T17:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
