---
title: "Static Site Builds: Lessons from Product Teams"
created-on: "2022-11-17T00:45:00Z"
updated-on: "2022-12-08T00:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

static site builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
