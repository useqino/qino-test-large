---
title: "A Second Look at Draft Handling for Marketing Sites"
created-on: "2021-11-29T14:30:00Z"
updated-on: "2021-11-30T14:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

If you work with marketing sites, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
