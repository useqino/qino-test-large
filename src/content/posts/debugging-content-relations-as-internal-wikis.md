---
title: "Debugging Content Relations as Internal Wikis"
created-on: "2026-03-26T20:30:00Z"
updated-on: "2026-04-01T20:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

There is a quiet consensus that content relations is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
