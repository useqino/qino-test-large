---
title: "A Second Look at Reading Time for Small Teams"
created-on: "2021-12-04T19:45:00Z"
updated-on: "2022-01-30T19:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

If you work with small teams, you have probably met reading time in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
