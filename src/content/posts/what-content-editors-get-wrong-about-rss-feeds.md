---
title: "What Content Editors Get Wrong About RSS Feeds"
created-on: "2021-10-25T02:15:00Z"
updated-on: "2021-11-14T02:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
