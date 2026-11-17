---
title: "Ten Questions About Content Versioning from Podcast Sites"
created-on: "2024-10-06T00:15:00Z"
updated-on: "2024-11-03T00:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

If you work with podcast sites, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
