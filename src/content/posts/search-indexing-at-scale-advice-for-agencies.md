---
title: "Search Indexing at Scale: Advice for Agencies"
created-on: "2021-04-24T17:15:00Z"
updated-on: "2021-06-14T17:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
