---
title: "A Checklist for Slug Design Aimed at Podcast Sites"
created-on: "2025-06-28T06:45:00Z"
updated-on: "2025-07-30T06:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

If you work with podcast sites, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
