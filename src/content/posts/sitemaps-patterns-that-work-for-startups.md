---
title: "Sitemaps Patterns That Work for Startups"
created-on: "2021-09-08T14:00:00Z"
updated-on: "2021-09-23T14:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with startups and that consensus falls apart quickly.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
