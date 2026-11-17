---
title: "Teaching Pagination to Product Teams"
created-on: "2021-06-16T00:15:00Z"
updated-on: "2021-07-03T00:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

pagination sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
