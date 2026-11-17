---
title: "Common Mistakes in Folder Structure Made by Solo Developers"
created-on: "2024-05-06T08:30:00Z"
updated-on: "2024-05-16T08:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
