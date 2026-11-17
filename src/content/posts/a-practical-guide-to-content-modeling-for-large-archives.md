---
title: "A Practical Guide to Content Modeling for Large Archives"
created-on: "2023-02-24T07:30:00Z"
updated-on: "2023-03-05T07:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
