---
title: "Editorial Workflows Patterns That Work for Content Editors"
created-on: "2022-03-06T19:30:00Z"
updated-on: "2022-03-06T19:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

If you work with content editors, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
