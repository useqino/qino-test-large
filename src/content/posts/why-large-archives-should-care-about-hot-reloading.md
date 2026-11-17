---
title: "Why Large Archives Should Care About Hot Reloading"
created-on: "2024-07-09T09:15:00Z"
updated-on: "2024-07-12T09:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
