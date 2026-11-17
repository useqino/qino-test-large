---
title: "Content Audits and the Long Tail of Large Archives"
created-on: "2026-03-05T06:15:00Z"
updated-on: "2026-03-13T06:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content audits is solved. Spend a week with large archives and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
