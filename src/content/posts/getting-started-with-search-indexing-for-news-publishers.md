---
title: "Getting Started with Search Indexing for News Publishers"
created-on: "2025-06-15T23:30:00Z"
updated-on: "2025-06-21T23:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with news publishers and that consensus falls apart quickly.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
