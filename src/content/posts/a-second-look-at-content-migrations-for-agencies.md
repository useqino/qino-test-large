---
title: "A Second Look at Content Migrations for Agencies"
created-on: "2022-12-10T10:00:00Z"
updated-on: "2023-02-03T10:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with agencies and that consensus falls apart quickly.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
