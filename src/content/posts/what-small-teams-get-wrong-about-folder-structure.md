---
title: "What Small Teams Get Wrong About Folder Structure"
created-on: "2024-09-18T11:15:00Z"
updated-on: "2024-11-05T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with small teams and that consensus falls apart quickly.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
