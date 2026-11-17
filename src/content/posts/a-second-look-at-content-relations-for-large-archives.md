---
title: "A Second Look at Content Relations for Large Archives"
created-on: "2023-03-23T21:15:00Z"
updated-on: "2023-04-14T21:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

There is a quiet consensus that content relations is solved. Spend a week with large archives and that consensus falls apart quickly.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
