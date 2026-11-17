---
title: "Small Wins in Author Profiles for Documentation Sites"
created-on: "2023-09-05T05:00:00Z"
updated-on: "2023-09-06T05:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
