---
title: "Measuring Markdown Frontmatter as Small Teams"
created-on: "2022-07-16T06:30:00Z"
updated-on: "2022-08-09T06:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with small teams and that consensus falls apart quickly.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
