---
title: "What News Publishers Get Wrong About Draft Handling"
created-on: "2025-12-06T06:00:00Z"
updated-on: "2026-01-09T06:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
