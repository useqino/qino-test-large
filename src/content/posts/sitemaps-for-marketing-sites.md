---
title: "Sitemaps for Marketing Sites"
created-on: "2023-12-11T09:15:00Z"
updated-on: "2023-12-23T09:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

Most teams only notice sitemaps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
