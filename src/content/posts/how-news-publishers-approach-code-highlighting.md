---
title: "How News Publishers Approach Code Highlighting"
created-on: "2023-08-18T10:45:00Z"
updated-on: "2023-10-04T10:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

code highlighting sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
