---
title: "Debugging Draft Handling as Small Teams"
created-on: "2025-12-02T23:00:00Z"
updated-on: "2026-01-07T23:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
