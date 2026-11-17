---
title: "MDX Components, Revisited by Content Editors"
created-on: "2021-11-03T22:30:00Z"
updated-on: "2021-12-27T22:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
