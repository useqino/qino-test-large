---
title: "Link Checking, Revisited by Marketing Sites"
created-on: "2022-07-29T17:15:00Z"
updated-on: "2022-07-31T17:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
