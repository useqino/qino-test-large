---
title: "Notes on Content Migrations for News Publishers"
created-on: "2023-05-20T07:15:00Z"
updated-on: "2023-05-24T07:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
