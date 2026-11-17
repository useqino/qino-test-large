---
title: "The Case for Rich Text Editors Among Open Source Projects"
created-on: "2024-09-20T09:15:00Z"
updated-on: "2024-10-03T09:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

If you work with open source projects, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
