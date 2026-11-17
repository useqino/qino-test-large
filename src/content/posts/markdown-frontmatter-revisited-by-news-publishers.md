---
title: "Markdown Frontmatter, Revisited by News Publishers"
created-on: "2023-05-07T17:45:00Z"
updated-on: "2023-06-18T17:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
