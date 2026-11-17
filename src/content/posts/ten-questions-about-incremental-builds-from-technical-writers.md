---
title: "Ten Questions About Incremental Builds from Technical Writers"
created-on: "2022-12-09T13:15:00Z"
updated-on: "2023-02-04T13:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with technical writers and that consensus falls apart quickly.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
