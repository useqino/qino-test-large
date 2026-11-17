---
title: "Ten Questions About Structured Data from Nonprofits"
created-on: "2025-09-05T18:15:00Z"
updated-on: "2025-09-18T18:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

structured data sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
