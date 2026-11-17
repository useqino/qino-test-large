---
title: "Why Nonprofits Should Care About Content Versioning"
created-on: "2022-12-07T07:15:00Z"
updated-on: "2023-01-24T07:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

If you work with nonprofits, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
