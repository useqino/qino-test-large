---
title: "Ten Questions About Content Modeling from E-commerce Catalogs"
created-on: "2022-12-13T17:45:00Z"
updated-on: "2023-01-18T17:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content modeling is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
