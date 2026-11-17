---
title: "Taxonomies at Scale: Advice for Open Source Projects"
created-on: "2023-10-16T01:00:00Z"
updated-on: "2023-12-13T01:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

If you work with open source projects, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
