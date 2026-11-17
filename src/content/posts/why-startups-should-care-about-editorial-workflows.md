---
title: "Why Startups Should Care About Editorial Workflows"
created-on: "2021-03-26T14:45:00Z"
updated-on: "2021-04-21T14:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
