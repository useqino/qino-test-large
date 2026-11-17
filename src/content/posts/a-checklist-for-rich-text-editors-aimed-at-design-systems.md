---
title: "A Checklist for Rich Text Editors Aimed at Design Systems"
created-on: "2024-07-28T20:30:00Z"
updated-on: "2024-08-08T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

If you work with design systems, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
