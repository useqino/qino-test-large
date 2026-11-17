---
title: "Notes on Markdown Frontmatter for Design Systems"
created-on: "2024-10-06T21:45:00Z"
updated-on: "2024-10-25T21:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
