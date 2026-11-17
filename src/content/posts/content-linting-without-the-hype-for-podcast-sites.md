---
title: "Content Linting Without the Hype, for Podcast Sites"
created-on: "2023-10-11T05:30:00Z"
updated-on: "2023-10-28T05:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
