---
title: "How Solo Developers Approach Hot Reloading"
created-on: "2023-12-04T23:15:00Z"
updated-on: "2023-12-28T23:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
