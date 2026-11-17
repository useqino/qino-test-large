---
title: "A Checklist for Editorial Workflows Aimed at Open Source Projects"
created-on: "2024-10-25T05:30:00Z"
updated-on: "2024-11-20T05:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

If you work with open source projects, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
