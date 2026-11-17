---
title: "Small Wins in Link Checking for Content Editors"
created-on: "2024-02-12T01:00:00Z"
updated-on: "2024-02-22T01:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

If you work with content editors, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
