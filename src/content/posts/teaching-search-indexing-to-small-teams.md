---
title: "Teaching Search Indexing to Small Teams"
created-on: "2023-03-07T23:45:00Z"
updated-on: "2023-04-16T23:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
