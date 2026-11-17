---
title: "Content Linting at Scale: Advice for Personal Blogs"
created-on: "2022-09-30T06:15:00Z"
updated-on: "2022-11-26T06:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
