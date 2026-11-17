---
title: "Small Wins in Type-Safe Content for News Publishers"
created-on: "2021-08-22T05:45:00Z"
updated-on: "2021-09-29T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with news publishers, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
