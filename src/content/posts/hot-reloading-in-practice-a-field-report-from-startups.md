---
title: "Hot Reloading in Practice: A Field Report from Startups"
created-on: "2023-05-19T23:30:00Z"
updated-on: "2023-06-12T23:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
