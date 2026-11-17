---
title: "Git-Based Publishing Patterns That Work for Podcast Sites"
created-on: "2021-11-30T08:45:00Z"
updated-on: "2022-01-13T08:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
