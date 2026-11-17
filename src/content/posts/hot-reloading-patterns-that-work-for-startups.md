---
title: "Hot Reloading Patterns That Work for Startups"
created-on: "2024-08-26T19:30:00Z"
updated-on: "2024-09-13T19:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
