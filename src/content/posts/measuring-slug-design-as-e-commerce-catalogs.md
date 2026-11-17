---
title: "Measuring Slug Design as E-commerce Catalogs"
created-on: "2021-08-24T13:00:00Z"
updated-on: "2021-10-21T13:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

There is a quiet consensus that slug design is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
