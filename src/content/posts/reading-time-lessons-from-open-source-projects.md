---
title: "Reading Time: Lessons from Open Source Projects"
created-on: "2023-10-29T08:45:00Z"
updated-on: "2023-11-20T08:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about reading time. It grew, because every answer raised two more questions.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
