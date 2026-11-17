---
title: "Content Versioning in Practice: A Field Report from Design Systems"
created-on: "2022-06-09T20:30:00Z"
updated-on: "2022-06-12T20:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

content versioning sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
