---
title: "Why Personal Blogs Should Care About Content Migrations"
created-on: "2024-06-09T01:00:00Z"
updated-on: "2024-06-20T01:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
