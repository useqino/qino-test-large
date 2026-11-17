---
title: "Rethinking Rich Text Editors for Product Teams"
created-on: "2021-11-03T15:15:00Z"
updated-on: "2021-11-10T15:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
