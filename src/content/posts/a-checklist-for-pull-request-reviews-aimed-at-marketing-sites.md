---
title: "A Checklist for Pull Request Reviews Aimed at Marketing Sites"
created-on: "2021-11-16T04:30:00Z"
updated-on: "2021-11-24T04:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
