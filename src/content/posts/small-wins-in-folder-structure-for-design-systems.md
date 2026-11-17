---
title: "Small Wins in Folder Structure for Design Systems"
created-on: "2025-04-13T14:15:00Z"
updated-on: "2025-05-31T14:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

folder structure sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
