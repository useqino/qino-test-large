---
title: "Rethinking Incremental Builds for Small Teams"
created-on: "2024-12-26T19:30:00Z"
updated-on: "2025-01-30T19:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
