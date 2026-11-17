---
title: "Teaching Pull Request Reviews to Agencies"
created-on: "2022-05-23T00:45:00Z"
updated-on: "2022-06-09T00:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with agencies and that consensus falls apart quickly.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
