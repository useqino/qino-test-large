---
title: "Getting Started with Open Graph Tags for Personal Blogs"
created-on: "2022-10-23T03:45:00Z"
updated-on: "2022-12-07T03:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

Most teams only notice open graph tags once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
