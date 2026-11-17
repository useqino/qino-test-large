---
title: "Teaching Content Linting to Open Source Projects"
created-on: "2021-09-15T13:45:00Z"
updated-on: "2021-09-22T13:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content linting is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
