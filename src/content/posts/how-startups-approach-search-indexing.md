---
title: "How Startups Approach Search Indexing"
created-on: "2021-07-26T21:30:00Z"
updated-on: "2021-08-18T21:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with startups and that consensus falls apart quickly.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
