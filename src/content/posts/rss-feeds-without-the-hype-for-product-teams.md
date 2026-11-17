---
title: "RSS Feeds Without the Hype, for Product Teams"
created-on: "2024-04-29T03:00:00Z"
updated-on: "2024-05-27T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

We rebuilt our approach to rss feeds three times last year. Here is what survived.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
