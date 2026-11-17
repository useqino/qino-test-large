---
title: "The Case for Build Caching Among News Publishers"
created-on: "2024-11-11T03:45:00Z"
updated-on: "2024-11-18T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

If you work with news publishers, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
