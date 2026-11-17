---
title: "A Practical Guide to Build Caching for Podcast Sites"
created-on: "2021-11-14T13:15:00Z"
updated-on: "2021-12-24T13:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

There is a quiet consensus that build caching is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
