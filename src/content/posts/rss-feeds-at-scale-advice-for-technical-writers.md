---
title: "RSS Feeds at Scale: Advice for Technical Writers"
created-on: "2025-08-22T04:00:00Z"
updated-on: "2025-10-13T04:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

We rebuilt our approach to rss feeds three times last year. Here is what survived.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
