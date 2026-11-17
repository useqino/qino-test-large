---
title: "A Checklist for Reading Time Aimed at Marketing Sites"
created-on: "2023-12-18T10:45:00Z"
updated-on: "2023-12-26T10:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
