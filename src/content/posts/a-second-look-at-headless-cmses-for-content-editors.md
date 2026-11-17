---
title: "A Second Look at Headless CMSes for Content Editors"
created-on: "2023-07-06T18:45:00Z"
updated-on: "2023-07-30T18:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

Most teams only notice headless cmses once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
