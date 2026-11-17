---
title: "The Hidden Cost of Type-Safe Content for Marketing Sites"
created-on: "2024-06-16T09:45:00Z"
updated-on: "2024-08-12T09:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

type-safe content sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
