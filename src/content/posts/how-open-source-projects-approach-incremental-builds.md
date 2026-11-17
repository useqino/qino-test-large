---
title: "How Open Source Projects Approach Incremental Builds"
created-on: "2025-03-23T21:30:00Z"
updated-on: "2025-05-14T21:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
