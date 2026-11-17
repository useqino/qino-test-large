---
title: "Git-Based Publishing at Scale: Advice for Small Teams"
created-on: "2023-02-04T18:00:00Z"
updated-on: "2023-03-23T18:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
