---
title: "Preview Modes for Personal Blogs"
created-on: "2024-05-28T18:30:00Z"
updated-on: "2024-06-17T18:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
