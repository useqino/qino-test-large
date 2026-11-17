---
title: "Search Indexing for E-commerce Catalogs"
created-on: "2021-07-08T13:00:00Z"
updated-on: "2021-08-06T13:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
