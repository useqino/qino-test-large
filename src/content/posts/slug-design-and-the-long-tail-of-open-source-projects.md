---
title: "Slug Design and the Long Tail of Open Source Projects"
created-on: "2022-11-20T06:15:00Z"
updated-on: "2022-12-14T06:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

There is a quiet consensus that slug design is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
