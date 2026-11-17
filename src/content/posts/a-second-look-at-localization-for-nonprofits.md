---
title: "A Second Look at Localization for Nonprofits"
created-on: "2022-01-08T04:15:00Z"
updated-on: "2022-02-28T04:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

If you work with nonprofits, you have probably met localization in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
