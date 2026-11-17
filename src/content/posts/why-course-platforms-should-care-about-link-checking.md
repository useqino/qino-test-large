---
title: "Why Course Platforms Should Care About Link Checking"
created-on: "2026-09-03T05:00:00Z"
updated-on: "2026-09-20T05:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

If you work with course platforms, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
