---
title: "Why Nonprofits Should Care About Rich Text Editors"
created-on: "2025-07-29T11:15:00Z"
updated-on: "2025-09-11T11:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

There is a quiet consensus that rich text editors is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
