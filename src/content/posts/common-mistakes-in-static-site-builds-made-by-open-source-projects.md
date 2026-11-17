---
title: "Common Mistakes in Static Site Builds Made by Open Source Projects"
created-on: "2024-02-26T10:15:00Z"
updated-on: "2024-03-12T10:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

If you work with open source projects, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
