---
title: "Debugging Incremental Builds as Product Teams"
created-on: "2024-09-08T01:15:00Z"
updated-on: "2024-09-27T01:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

If you work with product teams, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
