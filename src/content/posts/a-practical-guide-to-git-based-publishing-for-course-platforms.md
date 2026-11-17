---
title: "A Practical Guide to Git-Based Publishing for Course Platforms"
created-on: "2023-09-07T07:00:00Z"
updated-on: "2023-10-21T07:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

If you work with course platforms, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
