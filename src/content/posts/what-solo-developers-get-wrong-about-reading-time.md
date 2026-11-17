---
title: "What Solo Developers Get Wrong About Reading Time"
created-on: "2025-03-04T10:15:00Z"
updated-on: "2025-03-04T10:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
