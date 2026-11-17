---
title: "Pagination, Revisited by Course Platforms"
created-on: "2023-09-12T16:30:00Z"
updated-on: "2023-10-05T16:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

pagination sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
