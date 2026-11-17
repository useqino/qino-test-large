---
title: "Localization, Revisited by Personal Blogs"
created-on: "2025-04-27T05:45:00Z"
updated-on: "2025-05-21T05:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

There is a quiet consensus that localization is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
