---
title: "Taxonomies at Scale: Advice for Internal Wikis"
created-on: "2023-01-10T12:30:00Z"
updated-on: "2023-03-02T12:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

If you work with internal wikis, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
