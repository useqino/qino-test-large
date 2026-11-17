---
title: "Small Wins in Content Versioning for Small Teams"
created-on: "2025-08-12T12:00:00Z"
updated-on: "2025-09-15T12:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with small teams and that consensus falls apart quickly.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
