---
title: "Reading Time Patterns That Work for Content Editors"
created-on: "2024-02-21T19:00:00Z"
updated-on: "2024-02-26T19:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
