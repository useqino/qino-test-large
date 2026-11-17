---
title: "Image Pipelines: Lessons from Large Archives"
created-on: "2021-02-16T23:30:00Z"
updated-on: "2021-03-05T23:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with large archives and that consensus falls apart quickly.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
