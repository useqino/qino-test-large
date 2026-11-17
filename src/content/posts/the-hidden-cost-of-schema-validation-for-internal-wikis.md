---
title: "The Hidden Cost of Schema Validation for Internal Wikis"
created-on: "2023-11-14T10:30:00Z"
updated-on: "2024-01-06T10:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
