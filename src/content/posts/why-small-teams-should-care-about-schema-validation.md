---
title: "Why Small Teams Should Care About Schema Validation"
created-on: "2023-12-08T13:45:00Z"
updated-on: "2024-01-23T13:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
