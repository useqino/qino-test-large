---
title: "Notes on Code Highlighting for Enterprises"
created-on: "2024-05-05T14:15:00Z"
updated-on: "2024-06-14T14:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with enterprises and that consensus falls apart quickly.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
