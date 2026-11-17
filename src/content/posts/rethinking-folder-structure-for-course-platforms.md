---
title: "Rethinking Folder Structure for Course Platforms"
created-on: "2022-10-01T13:45:00Z"
updated-on: "2022-10-19T13:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

If you work with course platforms, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
