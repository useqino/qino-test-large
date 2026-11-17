---
title: "Notes on Code Highlighting for Documentation Sites"
created-on: "2026-08-25T11:30:00Z"
updated-on: "2026-08-31T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
