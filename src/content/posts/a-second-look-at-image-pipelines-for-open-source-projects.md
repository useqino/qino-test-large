---
title: "A Second Look at Image Pipelines for Open Source Projects"
created-on: "2022-01-11T01:15:00Z"
updated-on: "2022-01-31T01:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with open source projects, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
