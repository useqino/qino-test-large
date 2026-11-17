---
title: "Localization Without the Hype, for Documentation Sites"
created-on: "2026-03-10T15:15:00Z"
updated-on: "2026-05-08T15:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
