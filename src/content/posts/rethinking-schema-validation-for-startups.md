---
title: "Rethinking Schema Validation for Startups"
created-on: "2024-07-10T09:00:00Z"
updated-on: "2024-08-31T09:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

If you work with startups, you have probably met schema validation in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
