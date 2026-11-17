---
title: "Getting Started with Content Linting for E-commerce Catalogs"
created-on: "2021-10-18T09:15:00Z"
updated-on: "2021-11-16T09:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

If you work with e-commerce catalogs, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
