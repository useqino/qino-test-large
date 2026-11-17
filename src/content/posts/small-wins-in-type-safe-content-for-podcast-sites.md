---
title: "Small Wins in Type-Safe Content for Podcast Sites"
created-on: "2021-03-08T04:30:00Z"
updated-on: "2021-04-07T04:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

Most teams only notice type-safe content once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
