---
title: "The Case for Content Linting Among Marketing Sites"
created-on: "2021-05-06T00:45:00Z"
updated-on: "2021-06-22T00:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

There is a quiet consensus that content linting is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
