---
title: "Notes on Image Pipelines for Startups"
created-on: "2024-07-03T02:45:00Z"
updated-on: "2024-08-09T02:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

If you work with startups, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
