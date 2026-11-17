---
title: "The Case for Content Audits Among Documentation Sites"
created-on: "2021-11-29T05:00:00Z"
updated-on: "2021-12-20T05:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

There is a quiet consensus that content audits is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
