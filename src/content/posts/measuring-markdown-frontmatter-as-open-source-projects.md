---
title: "Measuring Markdown Frontmatter as Open Source Projects"
created-on: "2023-10-31T21:00:00Z"
updated-on: "2023-11-12T21:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about markdown frontmatter. It grew, because every answer raised two more questions.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
