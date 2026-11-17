---
title: "Sitemaps for Course Platforms"
created-on: "2021-07-25T00:45:00Z"
updated-on: "2021-08-12T00:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
