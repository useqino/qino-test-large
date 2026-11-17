---
title: "The Case for Taxonomies Among Documentation Sites"
created-on: "2021-12-03T22:30:00Z"
updated-on: "2022-01-21T22:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
