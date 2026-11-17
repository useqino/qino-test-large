---
title: "Notes on Search Indexing for Large Archives"
created-on: "2022-12-15T09:30:00Z"
updated-on: "2023-01-06T09:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
