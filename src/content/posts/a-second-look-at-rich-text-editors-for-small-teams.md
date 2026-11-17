---
title: "A Second Look at Rich Text Editors for Small Teams"
created-on: "2021-08-20T14:30:00Z"
updated-on: "2021-08-20T14:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
