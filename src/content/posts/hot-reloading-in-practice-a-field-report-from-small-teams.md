---
title: "Hot Reloading in Practice: A Field Report from Small Teams"
created-on: "2021-10-20T17:00:00Z"
updated-on: "2021-12-07T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

If you work with small teams, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
