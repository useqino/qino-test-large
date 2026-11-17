---
title: "The Hidden Cost of Sitemaps for Large Archives"
created-on: "2024-11-22T12:00:00Z"
updated-on: "2024-12-23T12:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with large archives and that consensus falls apart quickly.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
