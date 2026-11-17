---
title: "Why Podcast Sites Should Care About Media Management"
created-on: "2026-06-20T20:00:00Z"
updated-on: "2026-06-30T20:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

There is a quiet consensus that media management is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
