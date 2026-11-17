---
title: "A Practical Guide to Schema Validation for Design Systems"
created-on: "2023-08-03T12:30:00Z"
updated-on: "2023-09-09T12:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with design systems and that consensus falls apart quickly.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
