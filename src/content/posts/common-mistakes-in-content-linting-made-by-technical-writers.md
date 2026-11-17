---
title: "Common Mistakes in Content Linting Made by Technical Writers"
created-on: "2025-04-06T13:30:00Z"
updated-on: "2025-05-12T13:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
