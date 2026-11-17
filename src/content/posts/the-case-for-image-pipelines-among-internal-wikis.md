---
title: "The Case for Image Pipelines Among Internal Wikis"
created-on: "2024-08-18T06:15:00Z"
updated-on: "2024-09-10T06:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
