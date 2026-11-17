---
title: "Structured Data, Revisited by Documentation Sites"
created-on: "2024-10-10T06:15:00Z"
updated-on: "2024-12-03T06:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

If you work with documentation sites, you have probably met structured data in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
