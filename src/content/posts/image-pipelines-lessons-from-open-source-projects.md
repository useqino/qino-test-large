---
title: "Image Pipelines: Lessons from Open Source Projects"
created-on: "2026-10-11T12:15:00Z"
updated-on: "2026-12-08T12:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
