---
title: "Rich Text Editors in Practice: A Field Report from Product Teams"
created-on: "2022-03-23T14:45:00Z"
updated-on: "2022-05-11T14:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
