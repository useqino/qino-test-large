---
title: "Draft Handling Patterns That Work for Agencies"
created-on: "2024-11-15T23:00:00Z"
updated-on: "2025-01-07T23:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

If you work with agencies, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
