---
title: "A Checklist for Preview Modes Aimed at Enterprises"
created-on: "2024-07-27T00:45:00Z"
updated-on: "2024-07-28T00:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with enterprises and that consensus falls apart quickly.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
