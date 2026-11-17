---
title: "Notes on Content Linting for Open Source Projects"
created-on: "2021-12-31T01:00:00Z"
updated-on: "2022-01-19T01:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content linting is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
