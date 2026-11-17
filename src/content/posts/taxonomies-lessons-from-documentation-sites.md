---
title: "Taxonomies: Lessons from Documentation Sites"
created-on: "2022-01-15T23:15:00Z"
updated-on: "2022-02-20T23:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
