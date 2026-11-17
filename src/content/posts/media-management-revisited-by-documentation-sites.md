---
title: "Media Management, Revisited by Documentation Sites"
created-on: "2026-07-20T08:00:00Z"
updated-on: "2026-09-02T08:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

If you work with documentation sites, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
