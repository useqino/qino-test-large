---
title: "Content Modeling in Practice: A Field Report from Product Teams"
created-on: "2024-11-11T13:30:00Z"
updated-on: "2024-11-21T13:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
