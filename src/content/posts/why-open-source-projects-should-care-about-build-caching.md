---
title: "Why Open Source Projects Should Care About Build Caching"
created-on: "2023-04-20T21:45:00Z"
updated-on: "2023-05-10T21:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that build caching is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
