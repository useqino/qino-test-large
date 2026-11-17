---
title: "The Case for Content Linting Among News Publishers"
created-on: "2021-01-08T23:30:00Z"
updated-on: "2021-01-29T23:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

If you work with news publishers, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
