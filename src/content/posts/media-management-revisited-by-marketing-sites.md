---
title: "Media Management, Revisited by Marketing Sites"
created-on: "2022-08-17T05:15:00Z"
updated-on: "2022-08-23T05:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

If you work with marketing sites, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
