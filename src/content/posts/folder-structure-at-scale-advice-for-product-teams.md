---
title: "Folder Structure at Scale: Advice for Product Teams"
created-on: "2026-03-27T09:30:00Z"
updated-on: "2026-05-21T09:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
