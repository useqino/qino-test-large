---
title: "Getting Started with Git-Based Publishing for Technical Writers"
created-on: "2021-03-30T04:15:00Z"
updated-on: "2021-04-16T04:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with technical writers and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
