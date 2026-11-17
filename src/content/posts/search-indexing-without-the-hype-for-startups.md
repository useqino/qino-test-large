---
title: "Search Indexing Without the Hype, for Startups"
created-on: "2025-03-20T08:45:00Z"
updated-on: "2025-04-16T08:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
