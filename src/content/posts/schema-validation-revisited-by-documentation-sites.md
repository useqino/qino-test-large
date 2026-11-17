---
title: "Schema Validation, Revisited by Documentation Sites"
created-on: "2024-12-13T18:30:00Z"
updated-on: "2025-01-04T18:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
