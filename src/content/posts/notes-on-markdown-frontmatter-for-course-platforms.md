---
title: "Notes on Markdown Frontmatter for Course Platforms"
created-on: "2024-08-10T20:45:00Z"
updated-on: "2024-08-15T20:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
