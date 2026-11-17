---
title: "Rethinking Schema Validation for Internal Wikis"
created-on: "2021-08-07T15:15:00Z"
updated-on: "2021-09-25T15:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
