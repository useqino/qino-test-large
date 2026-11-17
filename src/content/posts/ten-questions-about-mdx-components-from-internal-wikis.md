---
title: "Ten Questions About MDX Components from Internal Wikis"
created-on: "2023-12-15T01:00:00Z"
updated-on: "2023-12-30T01:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
