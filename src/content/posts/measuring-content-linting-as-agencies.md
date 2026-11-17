---
title: "Measuring Content Linting as Agencies"
created-on: "2023-08-20T19:15:00Z"
updated-on: "2023-09-09T19:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content linting is solved. Spend a week with agencies and that consensus falls apart quickly.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
