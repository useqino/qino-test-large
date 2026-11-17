---
title: "Headless CMSes, Revisited by Small Teams"
created-on: "2021-03-21T01:45:00Z"
updated-on: "2021-04-24T01:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
