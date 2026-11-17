---
title: "Small Wins in Draft Handling for E-commerce Catalogs"
created-on: "2020-11-22T04:30:00Z"
updated-on: "2021-01-18T04:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
