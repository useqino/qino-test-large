---
title: "How Design Systems Approach Content Audits"
created-on: "2024-09-22T01:15:00Z"
updated-on: "2024-09-30T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
