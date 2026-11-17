---
title: "A Second Look at Markdown Frontmatter for Enterprises"
created-on: "2026-10-04T05:45:00Z"
updated-on: "2026-11-03T05:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

If you work with enterprises, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
