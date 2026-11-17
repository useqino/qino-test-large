---
title: "Small Wins in Link Checking for Startups"
created-on: "2025-01-02T02:30:00Z"
updated-on: "2025-02-17T02:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

If you work with startups, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
