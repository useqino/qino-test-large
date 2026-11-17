---
title: "Slug Design Without the Hype, for Design Systems"
created-on: "2025-02-14T17:45:00Z"
updated-on: "2025-03-25T17:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

Most teams only notice slug design once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
