---
title: "Schema Validation, Revisited by Podcast Sites"
created-on: "2024-06-05T15:00:00Z"
updated-on: "2024-06-26T15:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
