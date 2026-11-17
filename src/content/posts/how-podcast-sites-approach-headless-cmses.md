---
title: "How Podcast Sites Approach Headless CMSes"
created-on: "2025-07-11T21:45:00Z"
updated-on: "2025-08-21T21:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
