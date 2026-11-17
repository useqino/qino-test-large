---
title: "What Nonprofits Get Wrong About Content Migrations"
created-on: "2022-08-02T13:30:00Z"
updated-on: "2022-08-11T13:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
