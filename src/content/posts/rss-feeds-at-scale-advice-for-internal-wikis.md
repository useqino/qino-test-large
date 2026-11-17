---
title: "RSS Feeds at Scale: Advice for Internal Wikis"
created-on: "2024-12-13T22:15:00Z"
updated-on: "2024-12-29T22:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
