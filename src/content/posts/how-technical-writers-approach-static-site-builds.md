---
title: "How Technical Writers Approach Static Site Builds"
created-on: "2026-04-09T03:45:00Z"
updated-on: "2026-04-12T03:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

If you work with technical writers, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
