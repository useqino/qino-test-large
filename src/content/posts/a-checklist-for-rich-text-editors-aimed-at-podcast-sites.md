---
title: "A Checklist for Rich Text Editors Aimed at Podcast Sites"
created-on: "2022-06-26T15:15:00Z"
updated-on: "2022-06-29T15:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
