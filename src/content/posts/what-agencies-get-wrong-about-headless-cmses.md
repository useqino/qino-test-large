---
title: "What Agencies Get Wrong About Headless CMSes"
created-on: "2021-12-22T10:00:00Z"
updated-on: "2022-01-12T10:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

If you work with agencies, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
