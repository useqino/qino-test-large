---
title: "Rethinking Static Site Builds for Marketing Sites"
created-on: "2023-07-09T00:15:00Z"
updated-on: "2023-08-27T00:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
