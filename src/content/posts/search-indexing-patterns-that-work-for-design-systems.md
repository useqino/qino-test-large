---
title: "Search Indexing Patterns That Work for Design Systems"
created-on: "2023-06-16T07:30:00Z"
updated-on: "2023-06-29T07:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
