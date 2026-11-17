---
title: "Localization, Revisited by Enterprises"
created-on: "2021-06-17T10:15:00Z"
updated-on: "2021-06-17T10:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
