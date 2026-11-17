---
title: "What News Publishers Get Wrong About Image Pipelines"
created-on: "2023-01-15T05:30:00Z"
updated-on: "2023-01-20T05:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
