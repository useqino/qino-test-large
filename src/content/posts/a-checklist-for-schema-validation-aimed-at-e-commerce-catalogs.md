---
title: "A Checklist for Schema Validation Aimed at E-commerce Catalogs"
created-on: "2023-09-23T05:00:00Z"
updated-on: "2023-11-21T05:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
