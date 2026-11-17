---
title: "Headless CMSes in Practice: A Field Report from Content Editors"
created-on: "2025-03-20T11:00:00Z"
updated-on: "2025-04-18T11:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with content editors and that consensus falls apart quickly.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
