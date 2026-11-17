---
title: "The Case for Pull Request Reviews Among Product Teams"
created-on: "2021-05-06T11:15:00Z"
updated-on: "2021-05-19T11:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
