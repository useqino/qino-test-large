---
title: "Debugging Draft Handling as Solo Developers"
created-on: "2021-09-20T19:00:00Z"
updated-on: "2021-10-02T19:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
