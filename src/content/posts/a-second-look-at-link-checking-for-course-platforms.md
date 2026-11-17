---
title: "A Second Look at Link Checking for Course Platforms"
created-on: "2026-07-27T00:45:00Z"
updated-on: "2026-09-22T00:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
