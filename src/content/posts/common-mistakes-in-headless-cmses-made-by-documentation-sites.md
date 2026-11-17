---
title: "Common Mistakes in Headless CMSes Made by Documentation Sites"
created-on: "2020-11-22T16:45:00Z"
updated-on: "2020-12-02T16:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
