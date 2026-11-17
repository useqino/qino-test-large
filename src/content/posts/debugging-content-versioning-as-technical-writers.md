---
title: "Debugging Content Versioning as Technical Writers"
created-on: "2023-07-21T22:45:00Z"
updated-on: "2023-09-05T22:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
