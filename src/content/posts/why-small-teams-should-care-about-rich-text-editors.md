---
title: "Why Small Teams Should Care About Rich Text Editors"
created-on: "2021-06-09T20:30:00Z"
updated-on: "2021-07-14T20:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
