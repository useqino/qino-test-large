---
title: "Folder Structure Patterns That Work for Large Archives"
created-on: "2026-08-28T20:00:00Z"
updated-on: "2026-10-05T20:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

folder structure sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
