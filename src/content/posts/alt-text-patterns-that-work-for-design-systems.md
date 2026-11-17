---
title: "Alt Text Patterns That Work for Design Systems"
created-on: "2025-05-10T21:30:00Z"
updated-on: "2025-05-10T21:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

If you work with design systems, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
