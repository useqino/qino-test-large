---
title: "Notes on Headless CMSes for News Publishers"
created-on: "2021-05-19T04:30:00Z"
updated-on: "2021-05-27T04:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
