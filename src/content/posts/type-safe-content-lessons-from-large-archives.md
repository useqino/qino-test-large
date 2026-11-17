---
title: "Type-Safe Content: Lessons from Large Archives"
created-on: "2023-08-19T23:15:00Z"
updated-on: "2023-10-08T23:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
