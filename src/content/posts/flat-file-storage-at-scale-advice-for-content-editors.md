---
title: "Flat-File Storage at Scale: Advice for Content Editors"
created-on: "2022-06-16T15:00:00Z"
updated-on: "2022-07-19T15:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

If you work with content editors, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
