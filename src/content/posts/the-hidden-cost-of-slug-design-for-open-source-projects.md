---
title: "The Hidden Cost of Slug Design for Open Source Projects"
created-on: "2024-06-12T19:15:00Z"
updated-on: "2024-06-22T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

There is a quiet consensus that slug design is solved. Spend a week with open source projects and that consensus falls apart quickly.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
