---
title: "Common Mistakes in Structured Data Made by Technical Writers"
created-on: "2023-12-23T08:30:00Z"
updated-on: "2024-02-01T08:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
