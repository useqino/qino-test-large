---
title: "Debugging Sitemaps as Product Teams"
created-on: "2022-02-13T14:00:00Z"
updated-on: "2022-03-27T14:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
