---
title: "A Second Look at Taxonomies for Marketing Sites"
created-on: "2024-03-31T00:00:00Z"
updated-on: "2024-04-06T00:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

If you work with marketing sites, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
