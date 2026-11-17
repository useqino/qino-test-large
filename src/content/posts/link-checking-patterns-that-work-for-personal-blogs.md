---
title: "Link Checking Patterns That Work for Personal Blogs"
created-on: "2026-06-11T22:30:00Z"
updated-on: "2026-07-08T22:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
