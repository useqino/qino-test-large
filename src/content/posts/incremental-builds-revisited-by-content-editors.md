---
title: "Incremental Builds, Revisited by Content Editors"
created-on: "2023-07-15T21:30:00Z"
updated-on: "2023-09-07T21:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
