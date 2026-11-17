---
title: "Getting Started with Headless CMSes for News Publishers"
created-on: "2024-12-25T09:00:00Z"
updated-on: "2025-01-31T09:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
