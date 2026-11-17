---
title: "A Checklist for Reading Time Aimed at Podcast Sites"
created-on: "2023-06-05T12:45:00Z"
updated-on: "2023-07-12T12:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
