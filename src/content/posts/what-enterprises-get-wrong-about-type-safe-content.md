---
title: "What Enterprises Get Wrong About Type-Safe Content"
created-on: "2022-06-12T20:30:00Z"
updated-on: "2022-06-17T20:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
