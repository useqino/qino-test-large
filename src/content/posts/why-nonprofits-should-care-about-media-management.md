---
title: "Why Nonprofits Should Care About Media Management"
created-on: "2023-05-19T07:15:00Z"
updated-on: "2023-07-07T07:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about media management. It grew, because every answer raised two more questions.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
