---
title: "Ten Questions About Rich Text Editors from Nonprofits"
created-on: "2024-06-26T19:30:00Z"
updated-on: "2024-08-16T19:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
