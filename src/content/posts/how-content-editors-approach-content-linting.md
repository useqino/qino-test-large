---
title: "How Content Editors Approach Content Linting"
created-on: "2023-12-07T09:00:00Z"
updated-on: "2024-01-24T09:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content linting is solved. Spend a week with content editors and that consensus falls apart quickly.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
