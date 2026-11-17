---
title: "How Design Systems Approach Code Highlighting"
created-on: "2023-10-10T15:15:00Z"
updated-on: "2023-11-11T15:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
