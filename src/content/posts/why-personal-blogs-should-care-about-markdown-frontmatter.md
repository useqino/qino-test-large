---
title: "Why Personal Blogs Should Care About Markdown Frontmatter"
created-on: "2026-09-26T21:45:00Z"
updated-on: "2026-10-22T21:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
