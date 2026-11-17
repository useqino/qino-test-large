---
title: "Common Mistakes in Build Caching Made by E-commerce Catalogs"
created-on: "2024-12-03T06:00:00Z"
updated-on: "2025-01-16T06:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with e-commerce catalogs, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
