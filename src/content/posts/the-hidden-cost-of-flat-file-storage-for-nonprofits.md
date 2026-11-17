---
title: "The Hidden Cost of Flat-File Storage for Nonprofits"
created-on: "2022-10-18T01:15:00Z"
updated-on: "2022-12-10T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
