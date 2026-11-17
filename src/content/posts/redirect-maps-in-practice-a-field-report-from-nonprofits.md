---
title: "Redirect Maps in Practice: A Field Report from Nonprofits"
created-on: "2024-04-02T17:45:00Z"
updated-on: "2024-04-08T17:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
