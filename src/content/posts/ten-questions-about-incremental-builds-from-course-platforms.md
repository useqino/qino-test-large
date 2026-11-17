---
title: "Ten Questions About Incremental Builds from Course Platforms"
created-on: "2021-01-07T09:45:00Z"
updated-on: "2021-01-10T09:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
