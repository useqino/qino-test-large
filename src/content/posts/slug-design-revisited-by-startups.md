---
title: "Slug Design, Revisited by Startups"
created-on: "2021-06-26T03:00:00Z"
updated-on: "2021-07-19T03:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with startups, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
