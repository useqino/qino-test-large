---
title: "How Agencies Approach Static Site Builds"
created-on: "2022-10-18T01:30:00Z"
updated-on: "2022-12-03T01:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with agencies and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
