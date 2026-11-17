---
title: "Teaching Redirect Maps to Design Systems"
created-on: "2026-08-18T00:45:00Z"
updated-on: "2026-09-22T00:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

There is a quiet consensus that redirect maps is solved. Spend a week with design systems and that consensus falls apart quickly.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
