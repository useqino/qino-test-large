---
title: "Why Technical Writers Should Care About Pull Request Reviews"
created-on: "2024-04-20T03:15:00Z"
updated-on: "2024-06-04T03:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about pull request reviews. It grew, because every answer raised two more questions.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
