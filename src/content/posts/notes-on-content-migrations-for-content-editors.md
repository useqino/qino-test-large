---
title: "Notes on Content Migrations for Content Editors"
created-on: "2021-08-01T21:30:00Z"
updated-on: "2021-09-18T21:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with content editors and that consensus falls apart quickly.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
