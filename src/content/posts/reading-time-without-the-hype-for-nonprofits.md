---
title: "Reading Time Without the Hype, for Nonprofits"
created-on: "2021-04-07T16:00:00Z"
updated-on: "2021-04-12T16:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
