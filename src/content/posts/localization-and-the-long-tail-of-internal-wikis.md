---
title: "Localization and the Long Tail of Internal Wikis"
created-on: "2023-04-07T19:00:00Z"
updated-on: "2023-04-29T19:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
