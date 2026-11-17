---
title: "A Checklist for Content Versioning Aimed at E-commerce Catalogs"
created-on: "2022-09-14T01:45:00Z"
updated-on: "2022-11-09T01:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

content versioning sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
