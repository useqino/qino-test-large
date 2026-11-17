---
title: "Pull Request Reviews in Practice: A Field Report from News Publishers"
created-on: "2024-08-27T10:00:00Z"
updated-on: "2024-10-20T10:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
