---
title: "Teaching Taxonomies to News Publishers"
created-on: "2021-04-23T03:45:00Z"
updated-on: "2021-05-09T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
