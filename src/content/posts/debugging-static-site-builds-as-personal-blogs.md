---
title: "Debugging Static Site Builds as Personal Blogs"
created-on: "2026-03-26T15:00:00Z"
updated-on: "2026-05-06T15:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

If you work with personal blogs, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
