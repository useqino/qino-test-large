---
title: "What Course Platforms Get Wrong About Author Profiles"
created-on: "2023-03-07T05:00:00Z"
updated-on: "2023-03-13T05:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
