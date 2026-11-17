---
title: "Small Wins in Flat-File Storage for Internal Wikis"
created-on: "2024-06-01T17:30:00Z"
updated-on: "2024-07-29T17:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

If you work with internal wikis, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
