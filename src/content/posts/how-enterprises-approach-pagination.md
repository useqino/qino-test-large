---
title: "How Enterprises Approach Pagination"
created-on: "2023-01-19T19:45:00Z"
updated-on: "2023-03-13T19:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

If you work with enterprises, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
