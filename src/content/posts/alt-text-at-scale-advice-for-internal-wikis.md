---
title: "Alt Text at Scale: Advice for Internal Wikis"
created-on: "2026-08-21T04:45:00Z"
updated-on: "2026-10-11T04:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
