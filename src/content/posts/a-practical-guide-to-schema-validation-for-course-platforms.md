---
title: "A Practical Guide to Schema Validation for Course Platforms"
created-on: "2026-03-13T14:30:00Z"
updated-on: "2026-05-05T14:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
