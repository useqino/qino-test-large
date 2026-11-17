---
title: "Folder Structure and the Long Tail of Enterprises"
created-on: "2024-12-19T11:45:00Z"
updated-on: "2025-02-07T11:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with enterprises, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
