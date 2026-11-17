---
title: "A Second Look at Flat-File Storage for Nonprofits"
created-on: "2023-02-07T10:30:00Z"
updated-on: "2023-03-14T10:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
