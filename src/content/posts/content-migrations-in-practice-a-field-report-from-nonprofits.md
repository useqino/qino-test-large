---
title: "Content Migrations in Practice: A Field Report from Nonprofits"
created-on: "2023-09-07T21:30:00Z"
updated-on: "2023-09-27T21:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
