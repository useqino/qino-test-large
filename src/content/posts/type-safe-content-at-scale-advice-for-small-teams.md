---
title: "Type-Safe Content at Scale: Advice for Small Teams"
created-on: "2021-06-28T10:00:00Z"
updated-on: "2021-07-20T10:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

Most teams only notice type-safe content once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
