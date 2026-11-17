---
title: "Debugging Editorial Workflows as Enterprises"
created-on: "2021-04-14T15:15:00Z"
updated-on: "2021-06-04T15:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

If you work with enterprises, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
