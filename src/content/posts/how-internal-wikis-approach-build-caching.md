---
title: "How Internal Wikis Approach Build Caching"
created-on: "2022-02-20T09:00:00Z"
updated-on: "2022-04-06T09:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

If you work with internal wikis, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
