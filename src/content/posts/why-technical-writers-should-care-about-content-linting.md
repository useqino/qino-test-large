---
title: "Why Technical Writers Should Care About Content Linting"
created-on: "2026-08-02T02:30:00Z"
updated-on: "2026-08-08T02:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
