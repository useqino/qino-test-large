---
title: "Reading Time Without the Hype, for Design Systems"
created-on: "2023-03-31T13:45:00Z"
updated-on: "2023-04-05T13:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
