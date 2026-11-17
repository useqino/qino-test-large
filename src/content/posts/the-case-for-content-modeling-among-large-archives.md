---
title: "The Case for Content Modeling Among Large Archives"
created-on: "2021-11-25T07:30:00Z"
updated-on: "2021-12-11T07:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

If you work with large archives, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
