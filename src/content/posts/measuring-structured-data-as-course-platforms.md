---
title: "Measuring Structured Data as Course Platforms"
created-on: "2023-03-08T12:30:00Z"
updated-on: "2023-04-12T12:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
