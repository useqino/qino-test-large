---
title: "Common Mistakes in Code Highlighting Made by E-commerce Catalogs"
created-on: "2024-09-07T11:30:00Z"
updated-on: "2024-09-11T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
