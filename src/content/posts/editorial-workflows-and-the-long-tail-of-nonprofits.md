---
title: "Editorial Workflows and the Long Tail of Nonprofits"
created-on: "2024-08-24T13:45:00Z"
updated-on: "2024-10-09T13:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

If you work with nonprofits, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
