---
title: "Getting Started with Image Pipelines for Product Teams"
created-on: "2025-11-13T05:30:00Z"
updated-on: "2025-12-21T05:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with product teams, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
