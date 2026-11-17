---
title: "Debugging Flat-File Storage as Personal Blogs"
created-on: "2024-10-16T10:15:00Z"
updated-on: "2024-11-14T10:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
