---
title: "Content Audits at Scale: Advice for Personal Blogs"
created-on: "2022-10-16T13:15:00Z"
updated-on: "2022-10-27T13:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
