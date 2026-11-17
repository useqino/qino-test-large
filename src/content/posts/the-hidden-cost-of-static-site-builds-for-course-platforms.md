---
title: "The Hidden Cost of Static Site Builds for Course Platforms"
created-on: "2022-04-28T20:15:00Z"
updated-on: "2022-05-21T20:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

static site builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
