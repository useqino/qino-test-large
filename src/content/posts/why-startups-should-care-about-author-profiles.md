---
title: "Why Startups Should Care About Author Profiles"
created-on: "2021-10-25T08:45:00Z"
updated-on: "2021-12-20T08:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

If you work with startups, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
