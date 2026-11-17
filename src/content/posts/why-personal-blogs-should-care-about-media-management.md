---
title: "Why Personal Blogs Should Care About Media Management"
created-on: "2025-12-23T21:15:00Z"
updated-on: "2025-12-27T21:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
