---
title: "Debugging Localization as News Publishers"
created-on: "2021-01-05T12:30:00Z"
updated-on: "2021-01-05T12:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

There is a quiet consensus that localization is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
