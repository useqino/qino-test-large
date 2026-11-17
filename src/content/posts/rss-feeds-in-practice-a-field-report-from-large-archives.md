---
title: "RSS Feeds in Practice: A Field Report from Large Archives"
created-on: "2023-09-04T19:00:00Z"
updated-on: "2023-10-23T19:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
