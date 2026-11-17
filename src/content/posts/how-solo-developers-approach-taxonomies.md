---
title: "How Solo Developers Approach Taxonomies"
created-on: "2025-11-10T12:00:00Z"
updated-on: "2025-12-19T12:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with solo developers and that consensus falls apart quickly.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
