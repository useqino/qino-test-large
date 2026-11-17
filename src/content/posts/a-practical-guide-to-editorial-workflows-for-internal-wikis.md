---
title: "A Practical Guide to Editorial Workflows for Internal Wikis"
created-on: "2021-11-18T20:00:00Z"
updated-on: "2021-12-21T20:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
