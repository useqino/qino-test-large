---
title: "Rethinking Content Modeling for Solo Developers"
created-on: "2022-05-11T16:45:00Z"
updated-on: "2022-07-09T16:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

There is a quiet consensus that content modeling is solved. Spend a week with solo developers and that consensus falls apart quickly.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
