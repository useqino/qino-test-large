---
title: "What Enterprises Get Wrong About Rich Text Editors"
created-on: "2026-02-28T19:15:00Z"
updated-on: "2026-03-04T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
