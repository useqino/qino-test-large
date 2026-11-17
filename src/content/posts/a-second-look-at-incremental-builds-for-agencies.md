---
title: "A Second Look at Incremental Builds for Agencies"
created-on: "2021-08-19T16:15:00Z"
updated-on: "2021-08-21T16:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
