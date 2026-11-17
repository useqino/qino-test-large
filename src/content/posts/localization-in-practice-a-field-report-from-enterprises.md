---
title: "Localization in Practice: A Field Report from Enterprises"
created-on: "2022-03-24T06:15:00Z"
updated-on: "2022-05-21T06:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that localization is solved. Spend a week with enterprises and that consensus falls apart quickly.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
