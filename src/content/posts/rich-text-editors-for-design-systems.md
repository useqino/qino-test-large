---
title: "Rich Text Editors for Design Systems"
created-on: "2022-01-06T14:15:00Z"
updated-on: "2022-02-22T14:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
