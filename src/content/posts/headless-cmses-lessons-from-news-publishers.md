---
title: "Headless CMSes: Lessons from News Publishers"
created-on: "2024-03-21T10:15:00Z"
updated-on: "2024-04-04T10:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
