---
title: "Folder Structure Without the Hype, for Agencies"
created-on: "2022-10-31T15:15:00Z"
updated-on: "2022-12-19T15:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with agencies, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
