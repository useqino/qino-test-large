---
title: "Git-Based Publishing at Scale: Advice for Enterprises"
created-on: "2022-04-13T03:00:00Z"
updated-on: "2022-06-10T03:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

If you work with enterprises, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
