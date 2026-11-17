---
title: "Teaching Pull Request Reviews to Product Teams"
created-on: "2024-05-27T00:45:00Z"
updated-on: "2024-05-30T00:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with product teams and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
