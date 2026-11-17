---
title: "Getting Started with Image Pipelines for Open Source Projects"
created-on: "2024-01-23T11:45:00Z"
updated-on: "2024-01-26T11:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with open source projects, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
