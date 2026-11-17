---
title: "Notes on Content Relations for Agencies"
created-on: "2022-06-04T11:15:00Z"
updated-on: "2022-07-10T11:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
