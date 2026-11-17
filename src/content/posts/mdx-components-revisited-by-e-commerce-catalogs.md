---
title: "MDX Components, Revisited by E-commerce Catalogs"
created-on: "2022-05-31T15:00:00Z"
updated-on: "2022-07-29T15:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

If you work with e-commerce catalogs, you have probably met mdx components in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
