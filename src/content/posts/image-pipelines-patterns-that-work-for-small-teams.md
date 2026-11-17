---
title: "Image Pipelines Patterns That Work for Small Teams"
created-on: "2025-07-23T02:00:00Z"
updated-on: "2025-07-23T02:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
