---
title: "A Checklist for Search Indexing Aimed at Documentation Sites"
created-on: "2025-03-05T22:15:00Z"
updated-on: "2025-03-12T22:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
