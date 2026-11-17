---
title: "Type-Safe Content and the Long Tail of Internal Wikis"
created-on: "2024-05-16T21:45:00Z"
updated-on: "2024-06-22T21:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
