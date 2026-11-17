---
title: "A Checklist for MDX Components Aimed at Internal Wikis"
created-on: "2023-11-30T15:00:00Z"
updated-on: "2023-12-03T15:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
