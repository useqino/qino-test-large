---
title: "A Checklist for Link Checking Aimed at Design Systems"
created-on: "2025-06-23T22:45:00Z"
updated-on: "2025-06-28T22:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
