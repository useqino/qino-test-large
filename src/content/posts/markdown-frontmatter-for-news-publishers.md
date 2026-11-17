---
title: "Markdown Frontmatter for News Publishers"
created-on: "2023-03-19T15:00:00Z"
updated-on: "2023-03-31T15:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
