---
title: "Getting Started with Pagination for Documentation Sites"
created-on: "2021-05-05T21:15:00Z"
updated-on: "2021-05-11T21:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

There is a quiet consensus that pagination is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
