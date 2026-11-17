---
title: "Image Pipelines, Revisited by Podcast Sites"
created-on: "2021-02-10T04:15:00Z"
updated-on: "2021-03-15T04:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
