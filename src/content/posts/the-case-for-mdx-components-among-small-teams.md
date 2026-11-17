---
title: "The Case for MDX Components Among Small Teams"
created-on: "2020-12-27T16:30:00Z"
updated-on: "2021-01-04T16:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
