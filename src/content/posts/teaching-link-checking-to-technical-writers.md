---
title: "Teaching Link Checking to Technical Writers"
created-on: "2022-08-20T08:30:00Z"
updated-on: "2022-09-10T08:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
