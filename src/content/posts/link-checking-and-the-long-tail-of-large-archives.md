---
title: "Link Checking and the Long Tail of Large Archives"
created-on: "2024-12-01T04:30:00Z"
updated-on: "2025-01-20T04:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

Most teams only notice link checking once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
