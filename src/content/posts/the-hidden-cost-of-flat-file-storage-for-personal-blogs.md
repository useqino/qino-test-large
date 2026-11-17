---
title: "The Hidden Cost of Flat-File Storage for Personal Blogs"
created-on: "2022-12-15T22:30:00Z"
updated-on: "2023-02-10T22:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

Most teams only notice flat-file storage once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
