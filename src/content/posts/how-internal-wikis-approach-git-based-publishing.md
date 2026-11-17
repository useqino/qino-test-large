---
title: "How Internal Wikis Approach Git-Based Publishing"
created-on: "2021-01-20T19:15:00Z"
updated-on: "2021-03-20T19:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
