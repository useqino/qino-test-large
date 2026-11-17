---
title: "Rethinking Author Profiles for Solo Developers"
created-on: "2022-11-18T06:30:00Z"
updated-on: "2022-12-04T06:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
