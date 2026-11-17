---
title: "Author Profiles and the Long Tail of Enterprises"
created-on: "2024-10-22T18:30:00Z"
updated-on: "2024-12-20T18:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with enterprises and that consensus falls apart quickly.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
