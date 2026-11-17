---
title: "The Case for Content Versioning Among Product Teams"
created-on: "2023-03-01T03:45:00Z"
updated-on: "2023-04-16T03:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
