---
title: "Search Indexing at Scale: Advice for Product Teams"
created-on: "2023-10-15T21:30:00Z"
updated-on: "2023-11-08T21:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

If you work with product teams, you have probably met search indexing in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
