---
title: "Rich Text Editors and the Long Tail of Large Archives"
created-on: "2022-10-16T11:00:00Z"
updated-on: "2022-11-13T11:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

If you work with large archives, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
