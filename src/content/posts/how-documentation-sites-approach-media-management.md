---
title: "How Documentation Sites Approach Media Management"
created-on: "2025-02-02T10:30:00Z"
updated-on: "2025-03-14T10:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

Most teams only notice media management once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
