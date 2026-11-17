---
title: "Localization: Lessons from Nonprofits"
created-on: "2021-04-15T08:45:00Z"
updated-on: "2021-05-12T08:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

There is a quiet consensus that localization is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
