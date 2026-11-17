---
title: "What Open Source Projects Get Wrong About Markdown Frontmatter"
created-on: "2024-07-21T01:15:00Z"
updated-on: "2024-07-24T01:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
