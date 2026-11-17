---
title: "How Personal Blogs Approach Static Site Builds"
created-on: "2023-05-16T08:15:00Z"
updated-on: "2023-06-10T08:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
