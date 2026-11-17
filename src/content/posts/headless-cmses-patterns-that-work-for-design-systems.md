---
title: "Headless CMSes Patterns That Work for Design Systems"
created-on: "2025-05-20T11:30:00Z"
updated-on: "2025-07-05T11:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with design systems, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
