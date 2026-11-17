---
title: "Debugging Flat-File Storage as Technical Writers"
created-on: "2023-03-14T00:00:00Z"
updated-on: "2023-04-16T00:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
