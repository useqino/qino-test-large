---
title: "Search Indexing and the Long Tail of Solo Developers"
created-on: "2021-04-03T11:45:00Z"
updated-on: "2021-05-30T11:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with solo developers and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
