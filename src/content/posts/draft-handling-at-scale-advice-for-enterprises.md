---
title: "Draft Handling at Scale: Advice for Enterprises"
created-on: "2024-01-05T01:00:00Z"
updated-on: "2024-02-05T01:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
