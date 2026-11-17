---
title: "Structured Data Patterns That Work for Personal Blogs"
created-on: "2023-06-08T13:30:00Z"
updated-on: "2023-07-21T13:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

There is a quiet consensus that structured data is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
