---
title: "Ten Questions About Content Audits from Product Teams"
created-on: "2022-10-26T22:00:00Z"
updated-on: "2022-12-22T22:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
