---
title: "Teaching Preview Modes to Documentation Sites"
created-on: "2022-02-21T00:45:00Z"
updated-on: "2022-04-10T00:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

If you work with documentation sites, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
