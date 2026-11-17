---
title: "Getting Started with Preview Modes for Enterprises"
created-on: "2025-10-05T22:45:00Z"
updated-on: "2025-11-10T22:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
