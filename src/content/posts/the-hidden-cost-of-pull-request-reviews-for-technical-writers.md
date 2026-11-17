---
title: "The Hidden Cost of Pull Request Reviews for Technical Writers"
created-on: "2026-05-02T03:30:00Z"
updated-on: "2026-06-14T03:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
