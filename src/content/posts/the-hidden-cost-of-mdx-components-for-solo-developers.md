---
title: "The Hidden Cost of MDX Components for Solo Developers"
created-on: "2025-06-30T03:15:00Z"
updated-on: "2025-07-04T03:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with solo developers and that consensus falls apart quickly.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
