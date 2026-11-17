---
title: "Why Small Teams Should Care About Folder Structure"
created-on: "2025-03-20T08:45:00Z"
updated-on: "2025-03-30T08:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with small teams and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
