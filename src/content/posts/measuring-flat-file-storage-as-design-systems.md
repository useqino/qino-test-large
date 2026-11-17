---
title: "Measuring Flat-File Storage as Design Systems"
created-on: "2025-08-02T07:15:00Z"
updated-on: "2025-09-07T07:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
