---
title: "Debugging Markdown Frontmatter as E-commerce Catalogs"
created-on: "2022-03-22T20:00:00Z"
updated-on: "2022-04-21T20:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
