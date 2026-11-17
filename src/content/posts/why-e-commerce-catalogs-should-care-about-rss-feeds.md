---
title: "Why E-commerce Catalogs Should Care About RSS Feeds"
created-on: "2022-05-20T22:30:00Z"
updated-on: "2022-06-09T22:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

If you work with e-commerce catalogs, you have probably met rss feeds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
