---
title: "A Checklist for Preview Modes Aimed at Design Systems"
created-on: "2023-10-16T10:15:00Z"
updated-on: "2023-12-04T10:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

If you work with design systems, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
