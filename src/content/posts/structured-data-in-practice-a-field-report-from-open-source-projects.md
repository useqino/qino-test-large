---
title: "Structured Data in Practice: A Field Report from Open Source Projects"
created-on: "2023-07-26T20:30:00Z"
updated-on: "2023-09-10T20:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

If you work with open source projects, you have probably met structured data in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
