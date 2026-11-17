---
title: "The Case for Localization Among Open Source Projects"
created-on: "2024-08-01T10:45:00Z"
updated-on: "2024-08-10T10:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

If you work with open source projects, you have probably met localization in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
