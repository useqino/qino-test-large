---
title: "Ten Questions About Editorial Workflows from Product Teams"
created-on: "2023-06-19T20:45:00Z"
updated-on: "2023-07-27T20:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

We rebuilt our approach to editorial workflows three times last year. Here is what survived.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
