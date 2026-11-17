---
title: "Type-Safe Content in Practice: A Field Report from Small Teams"
created-on: "2023-05-21T01:30:00Z"
updated-on: "2023-05-26T01:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with small teams and that consensus falls apart quickly.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
