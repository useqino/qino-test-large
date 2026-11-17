---
title: "Content Migrations and the Long Tail of Marketing Sites"
created-on: "2021-01-24T00:45:00Z"
updated-on: "2021-03-03T00:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
