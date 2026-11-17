---
title: "What Internal Wikis Get Wrong About Build Caching"
created-on: "2025-09-26T05:15:00Z"
updated-on: "2025-10-28T05:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

Most teams only notice build caching once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
