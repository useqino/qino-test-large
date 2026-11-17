---
title: "Why Design Systems Should Care About Git-Based Publishing"
created-on: "2021-12-25T04:30:00Z"
updated-on: "2022-01-22T04:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
