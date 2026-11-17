---
title: "A Checklist for Search Indexing Aimed at Startups"
created-on: "2021-03-29T10:15:00Z"
updated-on: "2021-03-30T10:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with startups and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
