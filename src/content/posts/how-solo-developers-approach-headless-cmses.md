---
title: "How Solo Developers Approach Headless CMSes"
created-on: "2022-08-16T19:45:00Z"
updated-on: "2022-09-25T19:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
