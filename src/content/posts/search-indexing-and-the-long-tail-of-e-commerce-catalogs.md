---
title: "Search Indexing and the Long Tail of E-commerce Catalogs"
created-on: "2021-05-01T04:00:00Z"
updated-on: "2021-06-13T04:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

If you work with e-commerce catalogs, you have probably met search indexing in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
