---
title: "Teaching Incremental Builds to Podcast Sites"
created-on: "2022-03-05T03:45:00Z"
updated-on: "2022-04-05T03:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
