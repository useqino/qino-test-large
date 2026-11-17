---
title: "Common Mistakes in Author Profiles Made by Internal Wikis"
created-on: "2025-10-01T19:45:00Z"
updated-on: "2025-11-13T19:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
