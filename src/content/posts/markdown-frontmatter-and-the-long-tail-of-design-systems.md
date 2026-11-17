---
title: "Markdown Frontmatter and the Long Tail of Design Systems"
created-on: "2024-04-16T07:45:00Z"
updated-on: "2024-04-23T07:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
