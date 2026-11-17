---
title: "Markdown Frontmatter Without the Hype, for Internal Wikis"
created-on: "2026-10-17T20:30:00Z"
updated-on: "2026-10-25T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

If you work with internal wikis, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
