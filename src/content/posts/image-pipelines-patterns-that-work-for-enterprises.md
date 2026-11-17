---
title: "Image Pipelines Patterns That Work for Enterprises"
created-on: "2021-07-25T10:45:00Z"
updated-on: "2021-09-14T10:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with enterprises, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
