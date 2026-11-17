---
title: "A Second Look at Code Highlighting for Nonprofits"
created-on: "2024-12-25T15:45:00Z"
updated-on: "2025-02-04T15:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
