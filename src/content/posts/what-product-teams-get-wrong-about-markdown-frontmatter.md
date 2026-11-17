---
title: "What Product Teams Get Wrong About Markdown Frontmatter"
created-on: "2022-11-20T06:15:00Z"
updated-on: "2022-12-22T06:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with product teams and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
