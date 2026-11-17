---
title: "A Checklist for Content Linting Aimed at Marketing Sites"
created-on: "2025-05-09T20:15:00Z"
updated-on: "2025-06-16T20:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

There is a quiet consensus that content linting is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
