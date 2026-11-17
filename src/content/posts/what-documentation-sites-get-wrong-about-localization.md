---
title: "What Documentation Sites Get Wrong About Localization"
created-on: "2025-12-10T18:30:00Z"
updated-on: "2025-12-16T18:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

We rebuilt our approach to localization three times last year. Here is what survived.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
