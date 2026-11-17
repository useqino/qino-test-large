---
title: "A Practical Guide to Media Management for Marketing Sites"
created-on: "2021-10-21T07:00:00Z"
updated-on: "2021-11-06T07:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

Most teams only notice media management once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
