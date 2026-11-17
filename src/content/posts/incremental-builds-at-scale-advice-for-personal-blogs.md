---
title: "Incremental Builds at Scale: Advice for Personal Blogs"
created-on: "2023-02-25T04:00:00Z"
updated-on: "2023-03-21T04:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
