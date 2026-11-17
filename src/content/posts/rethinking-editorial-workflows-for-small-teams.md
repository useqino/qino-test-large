---
title: "Rethinking Editorial Workflows for Small Teams"
created-on: "2025-09-26T19:45:00Z"
updated-on: "2025-10-04T19:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with small teams and that consensus falls apart quickly.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
