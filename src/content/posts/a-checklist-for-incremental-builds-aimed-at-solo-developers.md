---
title: "A Checklist for Incremental Builds Aimed at Solo Developers"
created-on: "2021-11-18T21:00:00Z"
updated-on: "2021-11-23T21:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with solo developers and that consensus falls apart quickly.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
