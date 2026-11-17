---
title: "Folder Structure and the Long Tail of Nonprofits"
created-on: "2025-01-07T07:15:00Z"
updated-on: "2025-01-10T07:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
