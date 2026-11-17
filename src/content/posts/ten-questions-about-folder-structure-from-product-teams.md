---
title: "Ten Questions About Folder Structure from Product Teams"
created-on: "2023-04-27T18:30:00Z"
updated-on: "2023-05-26T18:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
