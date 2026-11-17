---
title: "Common Mistakes in Content Relations Made by Enterprises"
created-on: "2026-02-17T06:45:00Z"
updated-on: "2026-02-17T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

Most teams only notice content relations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
