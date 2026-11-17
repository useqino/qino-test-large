---
title: "Debugging Redirect Maps as Nonprofits"
created-on: "2021-11-05T10:00:00Z"
updated-on: "2021-12-22T10:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

If you work with nonprofits, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
