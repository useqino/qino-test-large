---
title: "Media Management and the Long Tail of Content Editors"
created-on: "2020-11-08T16:30:00Z"
updated-on: "2020-12-25T16:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
