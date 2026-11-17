---
title: "Alt Text and the Long Tail of Nonprofits"
created-on: "2023-02-10T07:45:00Z"
updated-on: "2023-03-09T07:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

We rebuilt our approach to alt text three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
