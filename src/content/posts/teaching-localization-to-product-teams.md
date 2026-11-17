---
title: "Teaching Localization to Product Teams"
created-on: "2025-11-05T03:15:00Z"
updated-on: "2025-12-13T03:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that localization is solved. Spend a week with product teams and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
