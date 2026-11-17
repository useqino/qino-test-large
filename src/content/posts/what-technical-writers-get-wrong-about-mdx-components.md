---
title: "What Technical Writers Get Wrong About MDX Components"
created-on: "2023-04-01T12:30:00Z"
updated-on: "2023-05-01T12:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

If you work with technical writers, you have probably met mdx components in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
