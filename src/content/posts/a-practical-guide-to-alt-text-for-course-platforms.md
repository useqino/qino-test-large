---
title: "A Practical Guide to Alt Text for Course Platforms"
created-on: "2025-06-02T18:30:00Z"
updated-on: "2025-07-04T18:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with course platforms and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
