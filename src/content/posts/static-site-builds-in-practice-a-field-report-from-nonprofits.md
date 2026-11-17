---
title: "Static Site Builds in Practice: A Field Report from Nonprofits"
created-on: "2025-07-23T23:45:00Z"
updated-on: "2025-09-04T23:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

If you work with nonprofits, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
