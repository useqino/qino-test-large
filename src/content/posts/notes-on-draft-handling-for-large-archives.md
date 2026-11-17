---
title: "Notes on Draft Handling for Large Archives"
created-on: "2021-02-28T17:15:00Z"
updated-on: "2021-03-09T17:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
