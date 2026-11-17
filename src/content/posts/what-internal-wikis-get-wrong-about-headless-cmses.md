---
title: "What Internal Wikis Get Wrong About Headless CMSes"
created-on: "2025-07-19T03:45:00Z"
updated-on: "2025-09-01T03:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

If you work with internal wikis, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
