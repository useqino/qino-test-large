---
title: "Markdown Frontmatter for Podcast Sites"
created-on: "2025-10-20T08:00:00Z"
updated-on: "2025-12-18T08:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

If you work with podcast sites, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
