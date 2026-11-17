---
title: "Editorial Workflows, Revisited by Nonprofits"
created-on: "2024-07-14T20:15:00Z"
updated-on: "2024-07-19T20:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
