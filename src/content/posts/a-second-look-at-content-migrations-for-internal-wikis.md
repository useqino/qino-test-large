---
title: "A Second Look at Content Migrations for Internal Wikis"
created-on: "2025-09-09T12:15:00Z"
updated-on: "2025-10-01T12:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

If you work with internal wikis, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
