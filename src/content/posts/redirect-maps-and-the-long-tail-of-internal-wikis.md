---
title: "Redirect Maps and the Long Tail of Internal Wikis"
created-on: "2022-02-02T03:00:00Z"
updated-on: "2022-03-16T03:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

If you work with internal wikis, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
