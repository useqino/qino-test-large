---
title: "A Second Look at Folder Structure for Design Systems"
created-on: "2024-04-20T06:45:00Z"
updated-on: "2024-05-16T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
