---
title: "Teaching Hot Reloading to Startups"
created-on: "2026-01-28T12:30:00Z"
updated-on: "2026-02-23T12:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
