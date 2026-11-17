---
title: "Pagination: Lessons from Internal Wikis"
created-on: "2024-12-16T21:15:00Z"
updated-on: "2025-02-11T21:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that pagination is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
