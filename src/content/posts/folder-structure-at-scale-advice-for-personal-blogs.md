---
title: "Folder Structure at Scale: Advice for Personal Blogs"
created-on: "2026-07-21T18:30:00Z"
updated-on: "2026-08-29T18:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
