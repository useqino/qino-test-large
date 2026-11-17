---
title: "Why Enterprises Should Care About Type-Safe Content"
created-on: "2021-02-06T23:15:00Z"
updated-on: "2021-03-08T23:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

type-safe content sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
