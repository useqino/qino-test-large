---
title: "Common Mistakes in Content Migrations Made by Internal Wikis"
created-on: "2026-04-21T09:45:00Z"
updated-on: "2026-04-26T09:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

If you work with internal wikis, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
