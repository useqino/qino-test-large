---
title: "The Hidden Cost of Slug Design for Internal Wikis"
created-on: "2023-01-29T07:30:00Z"
updated-on: "2023-02-28T07:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that slug design is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
