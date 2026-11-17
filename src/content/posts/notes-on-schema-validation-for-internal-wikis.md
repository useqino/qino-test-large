---
title: "Notes on Schema Validation for Internal Wikis"
created-on: "2025-04-08T04:00:00Z"
updated-on: "2025-04-12T04:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
