---
title: "Common Mistakes in Structured Data Made by Small Teams"
created-on: "2026-06-11T06:30:00Z"
updated-on: "2026-06-28T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

There is a quiet consensus that structured data is solved. Spend a week with small teams and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
