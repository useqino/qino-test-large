---
title: "Common Mistakes in RSS Feeds Made by Documentation Sites"
created-on: "2022-07-31T15:45:00Z"
updated-on: "2022-09-14T15:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to rss feeds three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
