---
title: "A Practical Guide to Code Highlighting for Technical Writers"
created-on: "2022-10-25T00:30:00Z"
updated-on: "2022-12-04T00:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

code highlighting sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
