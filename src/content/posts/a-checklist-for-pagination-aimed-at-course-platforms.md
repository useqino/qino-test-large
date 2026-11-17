---
title: "A Checklist for Pagination Aimed at Course Platforms"
created-on: "2025-04-15T07:00:00Z"
updated-on: "2025-04-28T07:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

There is a quiet consensus that pagination is solved. Spend a week with course platforms and that consensus falls apart quickly.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
