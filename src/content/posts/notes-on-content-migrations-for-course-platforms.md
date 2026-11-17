---
title: "Notes on Content Migrations for Course Platforms"
created-on: "2024-11-24T13:45:00Z"
updated-on: "2024-12-20T13:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

If you work with course platforms, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
