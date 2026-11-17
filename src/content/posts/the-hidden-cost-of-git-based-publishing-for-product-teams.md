---
title: "The Hidden Cost of Git-Based Publishing for Product Teams"
created-on: "2021-10-22T07:30:00Z"
updated-on: "2021-11-06T07:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
