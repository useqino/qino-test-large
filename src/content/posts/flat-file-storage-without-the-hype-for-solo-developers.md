---
title: "Flat-File Storage Without the Hype, for Solo Developers"
created-on: "2022-01-13T19:15:00Z"
updated-on: "2022-01-30T19:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

If you work with solo developers, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
