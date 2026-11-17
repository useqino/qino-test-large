---
title: "Rethinking Git-Based Publishing for Small Teams"
created-on: "2021-12-01T13:00:00Z"
updated-on: "2021-12-26T13:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
