---
title: "Why E-commerce Catalogs Should Care About Content Audits"
created-on: "2023-09-08T17:00:00Z"
updated-on: "2023-11-01T17:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

There is a quiet consensus that content audits is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
