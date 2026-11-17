---
title: "Common Mistakes in Slug Design Made by News Publishers"
created-on: "2025-11-28T13:00:00Z"
updated-on: "2026-01-08T13:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to slug design three times last year. Here is what survived.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
