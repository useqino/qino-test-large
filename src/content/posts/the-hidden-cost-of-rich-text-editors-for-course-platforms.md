---
title: "The Hidden Cost of Rich Text Editors for Course Platforms"
created-on: "2025-10-03T12:15:00Z"
updated-on: "2025-11-18T12:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
