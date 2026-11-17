---
title: "Editorial Workflows in Practice: A Field Report from Open Source Projects"
created-on: "2023-05-11T06:00:00Z"
updated-on: "2023-07-03T06:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

If you work with open source projects, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
