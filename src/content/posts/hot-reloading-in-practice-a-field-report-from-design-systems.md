---
title: "Hot Reloading in Practice: A Field Report from Design Systems"
created-on: "2025-04-04T16:45:00Z"
updated-on: "2025-05-26T16:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with design systems, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
