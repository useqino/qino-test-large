---
title: "Notes on Author Profiles for News Publishers"
created-on: "2021-07-31T17:15:00Z"
updated-on: "2021-08-22T17:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with news publishers, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
