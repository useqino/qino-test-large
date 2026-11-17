---
title: "The Hidden Cost of Preview Modes for Documentation Sites"
created-on: "2020-11-12T04:45:00Z"
updated-on: "2020-12-15T04:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
