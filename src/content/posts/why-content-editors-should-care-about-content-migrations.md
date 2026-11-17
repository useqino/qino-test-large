---
title: "Why Content Editors Should Care About Content Migrations"
created-on: "2021-04-28T12:00:00Z"
updated-on: "2021-06-10T12:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
