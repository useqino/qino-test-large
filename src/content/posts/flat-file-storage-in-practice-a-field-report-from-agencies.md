---
title: "Flat-File Storage in Practice: A Field Report from Agencies"
created-on: "2022-04-01T18:30:00Z"
updated-on: "2022-05-29T18:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
