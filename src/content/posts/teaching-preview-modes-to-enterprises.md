---
title: "Teaching Preview Modes to Enterprises"
created-on: "2022-07-27T11:45:00Z"
updated-on: "2022-08-20T11:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

If you work with enterprises, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
