---
title: "Hot Reloading: Lessons from Documentation Sites"
created-on: "2024-08-23T00:30:00Z"
updated-on: "2024-09-02T00:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
