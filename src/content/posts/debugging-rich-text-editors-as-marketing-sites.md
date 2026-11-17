---
title: "Debugging Rich Text Editors as Marketing Sites"
created-on: "2022-10-17T05:45:00Z"
updated-on: "2022-12-03T05:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that rich text editors is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
