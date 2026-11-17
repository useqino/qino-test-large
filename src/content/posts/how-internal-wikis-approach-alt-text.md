---
title: "How Internal Wikis Approach Alt Text"
created-on: "2024-01-23T09:30:00Z"
updated-on: "2024-02-12T09:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

If you work with internal wikis, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
