---
title: "A Checklist for Preview Modes Aimed at Large Archives"
created-on: "2021-07-23T13:00:00Z"
updated-on: "2021-07-29T13:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

preview modes sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
