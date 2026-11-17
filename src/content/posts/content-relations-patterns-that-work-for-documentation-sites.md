---
title: "Content Relations Patterns That Work for Documentation Sites"
created-on: "2022-10-29T13:45:00Z"
updated-on: "2022-11-25T13:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
