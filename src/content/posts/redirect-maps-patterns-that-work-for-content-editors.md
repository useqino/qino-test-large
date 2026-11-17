---
title: "Redirect Maps Patterns That Work for Content Editors"
created-on: "2025-09-28T12:15:00Z"
updated-on: "2025-10-27T12:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
