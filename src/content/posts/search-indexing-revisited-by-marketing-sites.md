---
title: "Search Indexing, Revisited by Marketing Sites"
created-on: "2024-06-08T17:00:00Z"
updated-on: "2024-07-31T17:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

Most teams only notice search indexing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
