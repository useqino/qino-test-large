---
title: "Link Checking: Lessons from E-commerce Catalogs"
created-on: "2024-08-06T21:45:00Z"
updated-on: "2024-08-12T21:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

There is a quiet consensus that link checking is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
