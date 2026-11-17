---
title: "Static Site Builds Patterns That Work for Course Platforms"
created-on: "2024-06-22T16:45:00Z"
updated-on: "2024-07-20T16:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

If you work with course platforms, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
