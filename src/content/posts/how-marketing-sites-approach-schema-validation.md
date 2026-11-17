---
title: "How Marketing Sites Approach Schema Validation"
created-on: "2024-09-01T14:45:00Z"
updated-on: "2024-10-11T14:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
