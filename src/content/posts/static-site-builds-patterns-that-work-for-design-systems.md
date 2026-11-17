---
title: "Static Site Builds Patterns That Work for Design Systems"
created-on: "2026-03-02T10:00:00Z"
updated-on: "2026-04-17T10:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
