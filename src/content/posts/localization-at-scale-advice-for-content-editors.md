---
title: "Localization at Scale: Advice for Content Editors"
created-on: "2021-01-16T22:45:00Z"
updated-on: "2021-01-23T22:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to localization three times last year. Here is what survived.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
