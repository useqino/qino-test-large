---
title: "The Case for Content Modeling Among Content Editors"
created-on: "2025-01-26T21:00:00Z"
updated-on: "2025-03-20T21:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
