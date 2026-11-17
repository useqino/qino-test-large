---
title: "Media Management in Practice: A Field Report from Technical Writers"
created-on: "2022-04-17T21:30:00Z"
updated-on: "2022-06-07T21:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with technical writers, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
