---
title: "MDX Components: Lessons from Product Teams"
created-on: "2021-10-15T11:00:00Z"
updated-on: "2021-11-12T11:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
