---
title: "Code Highlighting and the Long Tail of Personal Blogs"
created-on: "2024-09-30T16:45:00Z"
updated-on: "2024-10-03T16:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

If you work with personal blogs, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
