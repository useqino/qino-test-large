---
title: "Debugging Headless CMSes as Product Teams"
created-on: "2021-03-13T05:30:00Z"
updated-on: "2021-05-07T05:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with product teams and that consensus falls apart quickly.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
