---
title: "Notes on Content Versioning for Nonprofits"
created-on: "2025-11-29T07:30:00Z"
updated-on: "2025-12-12T07:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

content versioning sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
