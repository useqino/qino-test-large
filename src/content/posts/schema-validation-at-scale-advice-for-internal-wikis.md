---
title: "Schema Validation at Scale: Advice for Internal Wikis"
created-on: "2024-07-20T09:15:00Z"
updated-on: "2024-09-03T09:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
