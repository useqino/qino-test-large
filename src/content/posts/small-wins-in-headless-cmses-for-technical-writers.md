---
title: "Small Wins in Headless CMSes for Technical Writers"
created-on: "2025-10-14T17:30:00Z"
updated-on: "2025-10-16T17:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with technical writers, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
