---
title: "A Second Look at Pull Request Reviews for Nonprofits"
created-on: "2023-03-09T06:15:00Z"
updated-on: "2023-03-15T06:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
