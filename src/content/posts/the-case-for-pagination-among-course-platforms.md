---
title: "The Case for Pagination Among Course Platforms"
created-on: "2021-04-19T19:30:00Z"
updated-on: "2021-05-05T19:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice pagination once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
