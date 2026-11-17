---
title: "Small Wins in Image Pipelines for Product Teams"
created-on: "2026-09-21T14:45:00Z"
updated-on: "2026-10-10T14:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

If you work with product teams, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
