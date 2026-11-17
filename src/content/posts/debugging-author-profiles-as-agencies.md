---
title: "Debugging Author Profiles as Agencies"
created-on: "2022-03-12T17:00:00Z"
updated-on: "2022-03-28T17:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

If you work with agencies, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
