---
title: "Image Pipelines in Practice: A Field Report from Open Source Projects"
created-on: "2024-09-20T12:00:00Z"
updated-on: "2024-10-26T12:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
