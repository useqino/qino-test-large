---
title: "Reading Time Without the Hype, for Technical Writers"
created-on: "2020-12-31T03:00:00Z"
updated-on: "2021-02-12T03:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
