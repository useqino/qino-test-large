---
title: "Measuring Markdown Frontmatter as Content Editors"
created-on: "2026-01-28T11:00:00Z"
updated-on: "2026-02-07T11:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about markdown frontmatter. It grew, because every answer raised two more questions.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
