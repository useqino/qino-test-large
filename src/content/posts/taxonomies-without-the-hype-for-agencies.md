---
title: "Taxonomies Without the Hype, for Agencies"
created-on: "2025-12-27T13:15:00Z"
updated-on: "2026-01-27T13:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

If you work with agencies, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
