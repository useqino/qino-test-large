---
title: "Rethinking Flat-File Storage for Agencies"
created-on: "2025-04-06T08:45:00Z"
updated-on: "2025-04-29T08:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
