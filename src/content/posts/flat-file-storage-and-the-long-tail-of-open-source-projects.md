---
title: "Flat-File Storage and the Long Tail of Open Source Projects"
created-on: "2024-01-12T20:45:00Z"
updated-on: "2024-02-12T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
