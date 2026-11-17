---
title: "The Hidden Cost of Preview Modes for Course Platforms"
created-on: "2024-08-16T07:00:00Z"
updated-on: "2024-10-02T07:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

If you work with course platforms, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
