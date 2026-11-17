---
title: "A Practical Guide to Markdown Frontmatter for Open Source Projects"
created-on: "2025-02-17T21:45:00Z"
updated-on: "2025-04-01T21:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
