---
title: "Common Mistakes in Code Highlighting Made by Content Editors"
created-on: "2024-01-24T04:15:00Z"
updated-on: "2024-02-09T04:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
