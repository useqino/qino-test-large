---
title: "A Practical Guide to Content Relations for Nonprofits"
created-on: "2025-02-17T10:15:00Z"
updated-on: "2025-03-06T10:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice content relations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
