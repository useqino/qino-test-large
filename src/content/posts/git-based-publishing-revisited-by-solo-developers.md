---
title: "Git-Based Publishing, Revisited by Solo Developers"
created-on: "2023-12-27T04:45:00Z"
updated-on: "2024-02-06T04:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
