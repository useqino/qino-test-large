---
title: "How Marketing Sites Approach Sitemaps"
created-on: "2020-11-26T01:45:00Z"
updated-on: "2021-01-04T01:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
