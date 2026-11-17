---
title: "Content Relations in Practice: A Field Report from Technical Writers"
created-on: "2024-05-09T23:00:00Z"
updated-on: "2024-05-19T23:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
