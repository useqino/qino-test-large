---
title: "Common Mistakes in Pull Request Reviews Made by Product Teams"
created-on: "2023-05-30T20:30:00Z"
updated-on: "2023-07-04T20:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

If you work with product teams, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
