---
title: "A Second Look at Author Profiles for Agencies"
created-on: "2025-11-27T10:45:00Z"
updated-on: "2026-01-05T10:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
