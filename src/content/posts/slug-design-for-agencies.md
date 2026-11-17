---
title: "Slug Design for Agencies"
created-on: "2026-02-13T17:15:00Z"
updated-on: "2026-04-08T17:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

Most teams only notice slug design once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
