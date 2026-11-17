---
title: "Small Wins in Sitemaps for Documentation Sites"
created-on: "2024-10-05T05:45:00Z"
updated-on: "2024-10-23T05:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
