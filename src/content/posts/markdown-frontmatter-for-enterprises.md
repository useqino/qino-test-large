---
title: "Markdown Frontmatter for Enterprises"
created-on: "2022-04-21T12:00:00Z"
updated-on: "2022-05-08T12:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with enterprises and that consensus falls apart quickly.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
