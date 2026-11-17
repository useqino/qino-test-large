---
title: "Taxonomies for Marketing Sites"
created-on: "2026-03-29T15:45:00Z"
updated-on: "2026-05-22T15:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
