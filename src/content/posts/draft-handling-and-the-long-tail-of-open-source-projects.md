---
title: "Draft Handling and the Long Tail of Open Source Projects"
created-on: "2025-11-21T22:30:00Z"
updated-on: "2025-11-28T22:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

If you work with open source projects, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
