---
title: "Folder Structure: Lessons from Technical Writers"
created-on: "2024-10-16T07:45:00Z"
updated-on: "2024-12-13T07:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
