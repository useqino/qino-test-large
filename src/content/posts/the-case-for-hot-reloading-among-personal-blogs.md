---
title: "The Case for Hot Reloading Among Personal Blogs"
created-on: "2024-09-13T18:30:00Z"
updated-on: "2024-10-10T18:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
