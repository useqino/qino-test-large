---
title: "Ten Questions About Pull Request Reviews from Small Teams"
created-on: "2026-10-25T08:45:00Z"
updated-on: "2026-11-22T08:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
