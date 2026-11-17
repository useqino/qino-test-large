---
title: "Static Site Builds at Scale: Advice for Nonprofits"
created-on: "2023-02-11T13:15:00Z"
updated-on: "2023-04-09T13:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to static site builds three times last year. Here is what survived.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
