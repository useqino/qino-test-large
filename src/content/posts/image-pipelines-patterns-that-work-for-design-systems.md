---
title: "Image Pipelines Patterns That Work for Design Systems"
created-on: "2026-07-24T08:15:00Z"
updated-on: "2026-08-01T08:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

Most teams only notice image pipelines once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
