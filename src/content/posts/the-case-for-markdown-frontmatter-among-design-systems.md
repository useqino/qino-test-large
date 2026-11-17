---
title: "The Case for Markdown Frontmatter Among Design Systems"
created-on: "2026-02-16T22:00:00Z"
updated-on: "2026-02-24T22:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

If you work with design systems, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
