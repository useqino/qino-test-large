---
title: "Notes on Headless CMSes for Internal Wikis"
created-on: "2024-06-09T20:00:00Z"
updated-on: "2024-06-22T20:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
