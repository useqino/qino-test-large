---
title: "Static Site Builds at Scale: Advice for Large Archives"
created-on: "2022-09-06T01:00:00Z"
updated-on: "2022-10-17T01:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

If you work with large archives, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
