---
title: "Ten Questions About Sitemaps from Design Systems"
created-on: "2026-06-11T15:00:00Z"
updated-on: "2026-07-02T15:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
