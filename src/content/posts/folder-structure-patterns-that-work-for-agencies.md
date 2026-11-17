---
title: "Folder Structure Patterns That Work for Agencies"
created-on: "2020-12-04T14:30:00Z"
updated-on: "2020-12-05T14:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
