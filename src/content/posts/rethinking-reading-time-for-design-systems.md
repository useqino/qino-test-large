---
title: "Rethinking Reading Time for Design Systems"
created-on: "2025-02-10T02:15:00Z"
updated-on: "2025-03-17T02:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
