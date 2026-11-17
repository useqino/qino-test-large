---
title: "MDX Components for Open Source Projects"
created-on: "2024-06-08T05:30:00Z"
updated-on: "2024-06-29T05:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
