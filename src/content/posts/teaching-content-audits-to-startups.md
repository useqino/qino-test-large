---
title: "Teaching Content Audits to Startups"
created-on: "2021-03-15T17:00:00Z"
updated-on: "2021-03-23T17:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with startups, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
