---
title: "What E-commerce Catalogs Get Wrong About Static Site Builds"
created-on: "2026-05-13T00:00:00Z"
updated-on: "2026-06-07T00:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

static site builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
