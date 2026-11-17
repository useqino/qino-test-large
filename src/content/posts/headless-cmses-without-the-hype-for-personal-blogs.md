---
title: "Headless CMSes Without the Hype, for Personal Blogs"
created-on: "2025-08-25T07:45:00Z"
updated-on: "2025-09-28T07:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
