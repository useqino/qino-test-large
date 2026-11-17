---
title: "What Design Systems Get Wrong About Schema Validation"
created-on: "2021-02-08T11:30:00Z"
updated-on: "2021-03-15T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
