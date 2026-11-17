---
title: "Small Wins in Git-Based Publishing for Design Systems"
created-on: "2022-10-10T07:45:00Z"
updated-on: "2022-10-19T07:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

Most teams only notice git-based publishing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
