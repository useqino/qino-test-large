---
title: "Small Wins in Headless CMSes for Marketing Sites"
created-on: "2025-11-16T06:00:00Z"
updated-on: "2026-01-14T06:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
