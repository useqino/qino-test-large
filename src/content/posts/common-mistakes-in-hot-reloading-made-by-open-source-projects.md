---
title: "Common Mistakes in Hot Reloading Made by Open Source Projects"
created-on: "2025-05-07T21:45:00Z"
updated-on: "2025-05-22T21:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

If you work with open source projects, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
