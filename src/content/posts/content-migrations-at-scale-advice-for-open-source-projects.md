---
title: "Content Migrations at Scale: Advice for Open Source Projects"
created-on: "2023-02-23T03:45:00Z"
updated-on: "2023-03-21T03:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
