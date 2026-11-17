---
title: "Content Linting Without the Hype, for Design Systems"
created-on: "2021-08-21T02:30:00Z"
updated-on: "2021-09-03T02:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
