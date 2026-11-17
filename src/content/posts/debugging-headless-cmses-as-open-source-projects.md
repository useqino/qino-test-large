---
title: "Debugging Headless CMSes as Open Source Projects"
created-on: "2025-06-01T04:00:00Z"
updated-on: "2025-06-23T04:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

Most teams only notice headless cmses once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
