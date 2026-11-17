---
title: "A Second Look at Code Highlighting for Marketing Sites"
created-on: "2021-11-06T15:15:00Z"
updated-on: "2021-11-19T15:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

Most teams only notice code highlighting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
