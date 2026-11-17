---
title: "Content Migrations Patterns That Work for Solo Developers"
created-on: "2022-06-28T00:15:00Z"
updated-on: "2022-07-13T00:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
