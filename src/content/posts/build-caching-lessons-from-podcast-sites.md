---
title: "Build Caching: Lessons from Podcast Sites"
created-on: "2026-02-23T07:15:00Z"
updated-on: "2026-03-30T07:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

If you work with podcast sites, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
