---
title: "Debugging Markdown Frontmatter as Design Systems"
created-on: "2022-07-19T02:15:00Z"
updated-on: "2022-09-12T02:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

If you work with design systems, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
