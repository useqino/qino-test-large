---
title: "Pull Request Reviews Patterns That Work for Marketing Sites"
created-on: "2022-04-11T06:45:00Z"
updated-on: "2022-05-04T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
