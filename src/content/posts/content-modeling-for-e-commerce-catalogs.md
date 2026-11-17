---
title: "Content Modeling for E-commerce Catalogs"
created-on: "2022-03-21T08:15:00Z"
updated-on: "2022-04-16T08:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

If you work with e-commerce catalogs, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
