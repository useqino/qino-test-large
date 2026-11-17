---
title: "Rethinking Preview Modes for Documentation Sites"
created-on: "2025-01-04T21:15:00Z"
updated-on: "2025-01-08T21:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

We rebuilt our approach to preview modes three times last year. Here is what survived.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
