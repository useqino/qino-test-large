---
title: "Why Solo Developers Should Care About Flat-File Storage"
created-on: "2021-04-11T21:30:00Z"
updated-on: "2021-06-05T21:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with solo developers and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
