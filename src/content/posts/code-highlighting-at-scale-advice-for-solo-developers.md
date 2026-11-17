---
title: "Code Highlighting at Scale: Advice for Solo Developers"
created-on: "2026-06-30T17:45:00Z"
updated-on: "2026-08-20T17:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with solo developers, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
