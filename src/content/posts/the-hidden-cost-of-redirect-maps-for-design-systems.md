---
title: "The Hidden Cost of Redirect Maps for Design Systems"
created-on: "2023-06-24T12:45:00Z"
updated-on: "2023-08-22T12:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

There is a quiet consensus that redirect maps is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
