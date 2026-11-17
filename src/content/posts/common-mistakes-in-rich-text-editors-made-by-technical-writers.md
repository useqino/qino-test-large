---
title: "Common Mistakes in Rich Text Editors Made by Technical Writers"
created-on: "2022-10-20T20:00:00Z"
updated-on: "2022-11-03T20:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

Most teams only notice rich text editors once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
