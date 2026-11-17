---
title: "Image Pipelines in Practice: A Field Report from News Publishers"
created-on: "2021-05-31T08:00:00Z"
updated-on: "2021-07-01T08:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
