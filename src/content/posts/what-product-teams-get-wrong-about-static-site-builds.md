---
title: "What Product Teams Get Wrong About Static Site Builds"
created-on: "2021-08-16T09:45:00Z"
updated-on: "2021-08-27T09:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

static site builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
