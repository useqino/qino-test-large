---
title: "Build Caching, Revisited by Design Systems"
created-on: "2021-03-10T17:30:00Z"
updated-on: "2021-03-13T17:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that build caching is solved. Spend a week with design systems and that consensus falls apart quickly.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
