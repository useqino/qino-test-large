---
title: "The Case for Code Highlighting Among Personal Blogs"
created-on: "2026-08-26T15:00:00Z"
updated-on: "2026-08-28T15:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

If you work with personal blogs, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
