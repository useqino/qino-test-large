---
title: "A Second Look at Content Linting for Small Teams"
created-on: "2021-05-28T05:45:00Z"
updated-on: "2021-07-21T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

If you work with small teams, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
