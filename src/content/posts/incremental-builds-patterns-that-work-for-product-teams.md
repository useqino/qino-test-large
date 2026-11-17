---
title: "Incremental Builds Patterns That Work for Product Teams"
created-on: "2022-08-23T09:15:00Z"
updated-on: "2022-09-07T09:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
