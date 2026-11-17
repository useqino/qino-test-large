---
title: "Measuring Preview Modes as Solo Developers"
created-on: "2020-11-23T03:00:00Z"
updated-on: "2021-01-14T03:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

If you work with solo developers, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
