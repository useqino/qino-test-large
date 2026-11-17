---
title: "Git-Based Publishing Patterns That Work for Course Platforms"
created-on: "2024-09-03T02:30:00Z"
updated-on: "2024-10-02T02:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

If you work with course platforms, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
