---
title: "The Case for Build Caching Among Documentation Sites"
created-on: "2026-02-19T21:00:00Z"
updated-on: "2026-03-24T21:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
