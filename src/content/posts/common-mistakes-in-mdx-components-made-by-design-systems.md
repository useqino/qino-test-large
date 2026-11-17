---
title: "Common Mistakes in MDX Components Made by Design Systems"
created-on: "2022-09-13T00:30:00Z"
updated-on: "2022-10-14T00:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
