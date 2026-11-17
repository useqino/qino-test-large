---
title: "Sitemaps Without the Hype, for Solo Developers"
created-on: "2023-08-09T10:15:00Z"
updated-on: "2023-09-12T10:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with solo developers and that consensus falls apart quickly.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
