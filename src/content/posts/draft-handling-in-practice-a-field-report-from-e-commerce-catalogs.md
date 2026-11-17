---
title: "Draft Handling in Practice: A Field Report from E-commerce Catalogs"
created-on: "2023-03-24T12:45:00Z"
updated-on: "2023-03-29T12:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

Most teams only notice draft handling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
