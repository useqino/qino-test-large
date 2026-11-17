---
title: "Small Wins in Reading Time for Podcast Sites"
created-on: "2022-08-29T10:15:00Z"
updated-on: "2022-09-07T10:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
