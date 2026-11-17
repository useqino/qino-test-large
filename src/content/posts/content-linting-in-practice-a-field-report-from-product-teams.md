---
title: "Content Linting in Practice: A Field Report from Product Teams"
created-on: "2022-12-20T02:45:00Z"
updated-on: "2022-12-21T02:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
