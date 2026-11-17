---
title: "Notes on Media Management for Marketing Sites"
created-on: "2024-10-01T15:30:00Z"
updated-on: "2024-10-03T15:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with marketing sites, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
