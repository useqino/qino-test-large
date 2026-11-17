---
title: "Why Content Editors Should Care About Rich Text Editors"
created-on: "2025-07-27T21:15:00Z"
updated-on: "2025-09-01T21:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

If you work with content editors, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
