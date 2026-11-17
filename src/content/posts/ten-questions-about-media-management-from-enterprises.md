---
title: "Ten Questions About Media Management from Enterprises"
created-on: "2021-11-26T06:00:00Z"
updated-on: "2022-01-05T06:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

There is a quiet consensus that media management is solved. Spend a week with enterprises and that consensus falls apart quickly.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
