---
title: "The Case for Search Indexing Among Enterprises"
created-on: "2021-01-29T22:00:00Z"
updated-on: "2021-03-09T22:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

Most teams only notice search indexing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
