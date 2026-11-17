---
title: "Link Checking: Lessons from Open Source Projects"
created-on: "2022-03-21T09:30:00Z"
updated-on: "2022-05-03T09:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

There is a quiet consensus that link checking is solved. Spend a week with open source projects and that consensus falls apart quickly.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
