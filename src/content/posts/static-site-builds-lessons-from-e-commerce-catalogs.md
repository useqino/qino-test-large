---
title: "Static Site Builds: Lessons from E-commerce Catalogs"
created-on: "2025-05-19T01:45:00Z"
updated-on: "2025-06-03T01:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
