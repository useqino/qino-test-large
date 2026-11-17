---
title: "Media Management and the Long Tail of Agencies"
created-on: "2025-10-26T08:15:00Z"
updated-on: "2025-12-09T08:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
