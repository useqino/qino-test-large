---
title: "Reading Time: Lessons from Large Archives"
created-on: "2021-08-12T18:45:00Z"
updated-on: "2021-09-16T18:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
