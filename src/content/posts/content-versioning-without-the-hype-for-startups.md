---
title: "Content Versioning Without the Hype, for Startups"
created-on: "2023-04-17T12:30:00Z"
updated-on: "2023-04-18T12:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

If you work with startups, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
