---
title: "Code Highlighting for Startups"
created-on: "2022-05-06T22:30:00Z"
updated-on: "2022-05-24T22:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

If you work with startups, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
