---
title: "Why Product Teams Should Care About Content Migrations"
created-on: "2024-01-06T19:15:00Z"
updated-on: "2024-01-14T19:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
