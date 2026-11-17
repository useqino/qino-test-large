---
title: "Small Wins in RSS Feeds for Nonprofits"
created-on: "2023-04-10T11:45:00Z"
updated-on: "2023-05-09T11:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
