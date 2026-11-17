---
title: "Why Product Teams Should Care About Redirect Maps"
created-on: "2024-03-27T08:30:00Z"
updated-on: "2024-05-14T08:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

Most teams only notice redirect maps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
