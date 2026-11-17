---
title: "Taxonomies in Practice: A Field Report from Personal Blogs"
created-on: "2020-11-02T00:30:00Z"
updated-on: "2020-12-17T00:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
