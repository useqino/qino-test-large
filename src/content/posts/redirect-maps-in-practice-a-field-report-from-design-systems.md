---
title: "Redirect Maps in Practice: A Field Report from Design Systems"
created-on: "2021-10-06T03:15:00Z"
updated-on: "2021-10-27T03:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

There is a quiet consensus that redirect maps is solved. Spend a week with design systems and that consensus falls apart quickly.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
