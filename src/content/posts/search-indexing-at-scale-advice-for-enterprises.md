---
title: "Search Indexing at Scale: Advice for Enterprises"
created-on: "2024-05-31T05:45:00Z"
updated-on: "2024-06-16T05:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with enterprises and that consensus falls apart quickly.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
