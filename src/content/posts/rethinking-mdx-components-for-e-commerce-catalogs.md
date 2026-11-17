---
title: "Rethinking MDX Components for E-commerce Catalogs"
created-on: "2022-07-12T09:45:00Z"
updated-on: "2022-08-11T09:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
