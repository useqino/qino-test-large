---
title: "Markdown Frontmatter: Lessons from Internal Wikis"
created-on: "2021-04-29T20:30:00Z"
updated-on: "2021-06-14T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
