---
title: "A Second Look at Content Modeling for Small Teams"
created-on: "2026-05-28T10:45:00Z"
updated-on: "2026-06-05T10:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
