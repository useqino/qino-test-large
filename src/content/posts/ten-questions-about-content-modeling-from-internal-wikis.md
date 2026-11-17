---
title: "Ten Questions About Content Modeling from Internal Wikis"
created-on: "2022-09-18T03:45:00Z"
updated-on: "2022-10-31T03:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

If you work with internal wikis, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
