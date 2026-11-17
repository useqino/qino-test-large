---
title: "What Technical Writers Get Wrong About Alt Text"
created-on: "2026-04-08T02:00:00Z"
updated-on: "2026-04-18T02:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

alt text sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
